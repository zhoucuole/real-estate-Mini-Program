// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    room_id: '',
    userInfo: {},
    comment: '',
    tn: 60,
    tnum: 0, //限制字数
    star: {
      'price': 0,
      'place': 0,
      'matching': 0,
      'traffic': 0,
      'environment': 0,
    },
  },
  onLoad: function (e) {
    var that = this
    //调用应用实例的方法获取全局数据
    console.log(e.id)
    that.setData({
      'room_id': e.id
    })
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
      comment: e.detail.value,
      tnum: length
    })
  },
  // 修改星级
  starChange: function (e) {
    var data = {}
    data['star.' + e.currentTarget.dataset.key] = parseInt(e.currentTarget.dataset.id)
    this.setData(data)
  },
  //  提交
  subChange: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/room/comment',
      data: {
        key: wx.getStorageSync('key'),
        room_id: that.data.room_id,
        price: that.data.star.price,
        location: that.data.star.place,
        match: that.data.star.matching,
        transport: that.data.star.traffic,
        environment: that.data.star.environment,
        content: that.data.comment,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          wx.showToast({
            title: res.data.msg,
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
  },
  toPhone: function (e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  }
})
