// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    text: '',
    tnum: 0, //起始字数
    tn: 300,//限制字数
    imgList: [], //图片列表
    imgArr: []
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  // 监听输入
  textChange: function (e) {
    var that = this
    var comment = e.detail.value
    var length = comment.length

    that.setData({
      text: e.detail.value,
      tnum: length
    })
  },
  //上传图片
  imgFileChange: function (e) {
    var that = this
    var imgList = that.data.imgList
    var imgArr = that.data.imgArr
    wx.chooseImage({
      count: 8,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (result) {
        wx.showLoading({
          title: '上传中',
          mask: true,
        })
        var fileList = result.tempFilePaths
        var lg = fileList.length
        var add = 0;
        var arr = []
        var dataArr = []//上传图片路径
        // 遍历上传
        for (let k = 0; k < lg; k++) {

          arr.push(fileList[k])
          wx.uploadFile({
            url:cm.webUrl + '/api/upload', //仅为示例，非真实的接口地址
            filePath: fileList[k],
            name: 'file',
            success: function (res) {

              var d = JSON.parse(res.data)
              dataArr.push(d.data)

              add += 1
              // 图片分张入数组 

            },
            complete: function () {
              // 判断上传完成
              var tempFilePaths = imgList.concat(arr)
              var imgs = imgArr.concat(dataArr)
              that.setData({
                imgList: tempFilePaths,
                imgArr: imgs
              })
              if (lg == add) {
                wx.hideLoading()
              }

            }
          })
        }



      }
    })

  },
  // 删除上传图片
  clearImgChange: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      confirmColor: "#fad707",
      confirmText: '继续',
      content: '是否删除图片',
      success: function (res) {
        if (res.confirm) {
          var i = e.currentTarget.dataset.index
          var imgList = that.data.imgList
          var dArr = that.data.imgArr
          var arr = []
          var d = [] //返回未删除图片
          imgList.map(function (e, n) {
            if (n != i) {
              arr.push(e)

            }
          })
          dArr.map(function (e, n) {
            if (n != i) {
              d.push(e)

            }
          })
          that.setData({
            imgList: arr,
            imgArr: d
          })

        } else if (res.cancel) {
          return false
        }
      }
    })


  },
  //提交审核
  subChange: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/user/complain',
      data: {
        key: wx.getStorageSync('key'),
        content: that.data.text,
        avatar: that.data.imgArr
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          console.log(res)
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function(){
            wx.navigateBack()
          },1300)
        } else {
          wx.showToast({
            title: res.data.msg,
            image: '/images/close-tip.png',
            duration: 2000
          })
        }
      }
    })
  }
})
