// 个人信息设置
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    phone: ''
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
  onShow: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/user/info',
      data: {
        key: wx.getStorageSync('key')
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'phone': res.data.data.phone
          })
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
  // 退出登录
  loginOut: function () {
    wx.showModal({
      title: '提示',
      confirmColor: "#fad707",
      confirmText: '继续',
      content: '是否退出登录？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
