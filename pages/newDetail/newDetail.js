// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    news: [],
  },
  onLoad: function (e) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.request({
      url: cm.webUrl + '/news/detail',
      data: {
        key: wx.getStorageSync('key'),
        id:e.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'news': res.data.news
          })
        }
      }
    })
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
})
