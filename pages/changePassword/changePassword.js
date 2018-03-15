// 修改密码
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {}
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

  formSubmit: function (e) {
    var obj = e.detail.value
    console.log(/^[0-9A-Za-z]{6,21}$/.test(obj.newPassword))
    if (!/^[0-9A-Za-z]{6,21}$/.test(obj.newPassword)) {

      wx.showToast({
        title: '格式错误，输入6-21个字符',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
    if (obj.newPassword == "") {

      wx.showToast({
        title: '新密码不能为空',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
    if (obj.oldPassword == "") {

      wx.showToast({
        title: '旧密码不能为空',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
    if (obj.quePassword != obj.newPassword) {

      wx.showToast({
        title: '验证密码失败',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }


    wx.showLoading({
      title: '',
      mask: true,
    })
    wx.request({
      url: cm.webUrl + '/user/reset',
      data: {
        key: wx.getStorageSync('key'),
        old_password: e.detail.value.oldPassword,
        new_password: e.detail.value.newPassword,
        confirm: e.detail.value.quePassword,
      },
      success: function (res) {
        wx.hideLoading()
        if (res.data.code == '200') {

          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 2000,
          })
          setTimeout(function () {
            wx.redirectTo({
              url: '../login/login',
            })
          }, 1300)
        } else {
          wx.showToast({
            title: res.data.msg,
            duration: 2000,
            image: '/images/close-tip.png'
          })
        }
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
})
