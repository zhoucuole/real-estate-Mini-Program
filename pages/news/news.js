// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    news: [],
    page: 2,
    limit: 10,
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.request({
      url: cm.webUrl + '/news/lst',
      data: {
        key: wx.getStorageSync('key'),
        page: 1,
        limit: that.data.limit
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

  scroll: function (e) {
    var that = this
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    //[...that.data.reservationList, ...res.data.reservation]
    wx.request({
      url: cm.webUrl + '/news/lst',
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        if (res.data.code == '200') {
          if (res.data.reservation.length > 0) {

            that.setData({
              'news': [...that.data.news, ...res.data.news],
              'page': that.data.page + 1
            })
          }

        }
      }
    })
  }
})
