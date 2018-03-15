//index.js
//获取应用实例
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    tab_flag: 'house',   //tab切换 house or police,
    page: 2,
    limit: 10,
    room: [], //房源信息,
    listData: [],
  },

  scroll:function(e){
    var that = this
    wx.request({
      url: cm.webUrl + e.currentTarget.dataset.url,
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        console.log(e.currentTarget.dataset.key)
        var key = e.currentTarget.dataset.key
        if (res.data.code == '200') {
          that.setData({
            'room': [...that.data.room,...res.data.room],
            'tab_flag': e.currentTarget.dataset.flag,
            'page':that.data.page+1
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            duration: 2000,
            image: '/images/close-tip.png'
          })
        }
      }
    })
  },
    //tab切换
  tab_change: function (e) {
    var that = this
    if (e.currentTarget.dataset.flag != that.data.tab_flag) {
      wx.request({
        url: cm.webUrl + e.currentTarget.dataset.url,
        data: {
          key: wx.getStorageSync('key'),
          page: 1,
          limit: that.data.limit
        },
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data)
          console.log(e.currentTarget.dataset.key)
          var key = e.currentTarget.dataset.key
          if (res.data.code == '200') {
            that.setData({
              'room': res.data.room,
              'tab_flag': e.currentTarget.dataset.flag,
              'page':2
            })
          } else {
            wx.showToast({
              title: res.data.msg,
              duration:2000,
              image:'/images/close-tip.png'
            })
            that.setData({
              [e.currentTarget.dataset.key]: [],
              'tab_flag': e.currentTarget.dataset.flag,
              'page': 2
            })
          }
        }
      })
    }

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 前往房源预约
  toRoomChange: function (e) {
    wx.navigateTo({
      url: '../roomDetail/roomDetail?id=' + e.currentTarget.dataset.id,
    })
  },
  onShow: function (res) {
    var that = this
    wx.request({
      url: cm.webUrl + '/room/recommend',
      data: {
        key: wx.getStorageSync('key'),
        page: 1,
        limit: that.data.limit
      },
      header: { 'content-type': 'applicition/json' },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'room': res.data.room,
            'tab_flag': 'house'
          })
        } else {
          wx.showToast({
            title: res.data.msg,
          })
        }
      }
    })
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
  }
})
