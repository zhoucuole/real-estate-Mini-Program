// 登录
var cm = require('../../utils/common.js')
var app = getApp()
var webUrl = cm.webUrl
Page({
  data: {
    userInfo: {}
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
  formSubmit: function (e) {
    
    var obj = e.detail.value
    wx.showLoading({
      title: '',
      mask: true,
    })
    wx.request({
      url: webUrl + '/user/login',
      data: {
        phone: obj.phone,
        password: obj.psd,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.data.code == "200") {
          wx.setStorageSync("key", res.data.key)
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.switchTab({
              url: "../index/index",
            })
          }, 1000)

        } else {
          //  失败请求状态   
          wx.showToast({
            title: res.data.msg,
            image: "/images/close-tip.png",
            duration: 2000
          })
        }
      }
    })

  },
})
