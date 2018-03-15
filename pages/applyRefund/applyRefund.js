// 审核退款
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    text: '',
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
  // 改变退款内容
  textChange: function(e){
    this.setData({
      text: e.detail.value
    })
  },
  //提交审核
  subChange: function(){
    wx.showLoading({
      title: '',
      mask: true,
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  }
})
