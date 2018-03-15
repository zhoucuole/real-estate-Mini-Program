// 放盘
// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var cm = require('../../utils/common.js')
var app = getApp()
var webUrl = cm.webUrl
Page({
  data: {
    step: '2',  //状态 1 or 2 or 3 or 4
    userInfo: "",
    tn: -1,
    tnum: 0, //限制字数
    comment: '',
    year: '',
    imgList: [], //图片列表
    imgArr: [],
    // 地址
    address: {},
    // 选项
    items: [
      { name: 1, value: '是', checked: 'true' },
      { name: 0, value: '否' },
    ],
    checked: 1,
    floorList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], //楼层列表
    directionList: ['朝东', '朝东南', '朝西', '朝西南', '朝南', '朝北', '朝东北'],
    //房型
    roomList: [
      "单房",
      "一房一厅",
      "二房一厅",
      "三房一厅",
      "三房二厅",
      "四房一厅",
      "四房二厅",
      "不限"
    ],
    // 装修类型
    typeList: [
      {
        id: 0,
        name: '毛胚',
        check: false,
      },
      {
        id: 1,
        name: '精装',
        check: true,
      },
      {
        id: 2,
        name: '简装',
        check: false,
      },

    ],
    // 特色
    supportList: [
      {
        id: 0,
        name: '满5年',
        check: true,
      },
      {
        id: 1,
        name: '随时看房',
        check: false,
      },
      {
        id: 2,
        name: '地铁',
        check: false,
      },
      {
        id: 3,
        name: '采光好',
        check: false,
      },

    ],


  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  // 提交置业
  formSubmit: function (e) {
    console.log(this.data.address)
    console.log(this.data.typeList)

    console.log(this.data.supportList)
    console.log('form，携带值为', e.detail.value)
  },
  // 监听输入
  textChange: function (e) {
    var that = this
    var comment = e.detail.value
    var length = comment.length

    that.setData({
      comment: e.detail.value,
      tnum: length
    })
  },
  //修改佣金
  radioChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      checked: e.detail.value
    })
  },

  // 年份选择
  yearChange: function (e) {
    this.setData({
      year: e.detail.value
    })
  },
  // 房型选择
  roomChange: function (e) {
    this.setData({
      room: e.detail.value
    })
  },
  // 楼层选择
  floorChange: function (e) {
    this.setData({
      floor: e.detail.value
    })
  },
  // 楼层选择
  directChange: function (e) {
    this.setData({
      direction: e.detail.value
    })
  },
  // 配套选择
  selChange: function (e) {
    var id = e.currentTarget.dataset.id
    var check = e.currentTarget.dataset.check
    var d = 'supportList[' + id + '].check'
    this.setData({
      [d]: !check
    })
  },
  // 装修选择
  typeChange: function (e) {
    var id = e.currentTarget.dataset.id
    var check = e.currentTarget.dataset.check
    var list = this.data.typeList
    list.map(function (e) {
      if (e.id == id) {
        e.check = true
      } else {
        e.check = false
      }
    })
    this.setData({
      typeList: list
    })
  },
  // 选择地图地址
  selMap: function () {
    var that = this
    wx.chooseLocation({
      success: function (e) {

        // 实例化API核心类
        var map = new QQMapWX({
          key: 'KH4BZ-IM6CJ-CU6FX-FEW6Q-MEOCQ-ZVFEK' // 必填
        });
        map.reverseGeocoder({
          location: {
            latitude: e.latitude,
            longitude: e.longitude
          },
          success: function (res) {
            console.log(res.result);
            that.setData({
              address: res.result
            })
          }
        })
      }
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
            url: webUrl + '/api/upload', //仅为示例，非真实的接口地址
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
  formSubmit: function (e) {
    console.log(this.data.address)
    // console.log(this.data.typeList)
    // console.log('21342352345234534')
    // console.log(wx.getStorageSync('key'))
    // console.log(this.data.supportList)
    console.log('form，携带值为', e.detail.value)
    var obj = e.detail.value
    var addressArr = this.data.address
    var typeList = ''
    this.data.typeList.map(function (a) { //获取装修的id
      if (a.check) {
        console.log(a)
        typeList = a.id
      }
    })

    var supportList = this.data.supportList
    var imgArr = this.data.imgArr
    if (addressArr.ad_info.district != '南沙区') {
      wx.showToast({
        title: '只能发布南沙区的房源',
        duration: 2000,
      })
    } else {
      wx.request({
        url: webUrl + '/room/post',
        data: {
          key: wx.getStorageSync('key'),
          room_type: 6,
          title: obj.proname, // 标题
          lng: addressArr.location.lng,
          lat: addressArr.location.lat,
          area: obj.area,  //面积
          price: obj.price, //价格
          unit_price: obj.fprice, //单价
          address: addressArr.address, //地址
          room_hall: obj.roomData ? parseInt(obj.roomData) + 1 : 0,
          property: obj.property, //物业
          building: obj.building, //楼盘
          is_commission: obj.check,
          commission: obj.dprice,
          contact: obj.name,
          phone: obj.phone,
          floor: parseInt(obj.floorData) + 1,
          selling: obj.comment, //描述
          avatar: imgArr,
          district: addressArr.ad_info.district//区域
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.data.code == "400") {
            wx.showToast({
              title: res.data.msg,
              icon: 'success',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: '发布成功',
              icon: 'success',
              duration: 2000
            })
          }
        }
      })
    }
  },
})
