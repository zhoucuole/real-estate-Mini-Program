// 我的房源
var cm = require('../../utils/common.js')
var app = getApp()
var webUrl = cm.webUrl
Page({
  data: {
    uid: '',
    page: 2,
    limit: 10,
    listData: [],
  },
  scroll: function () {
    var that = this
    wx.request({
      url: webUrl + '/room/room_list',
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit,
        uid: that.data.uid
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          if (res.data.room.length > 0) {
            that.setData({
              'listData': [...that.data.listData, ...res.data.room],
              'page': that.data.page + 1
            })
          }
        } else {
          wx.showToast({
            title: res.data.msg,
            image: '/images/close-tip.png',
            duration: 2000
          })
        }
      },
    })
  },
  onLoad: function (e) {
    console.log('onLoad')
    var that = this
    //获取初始化数据
    wx.request({
      url: webUrl + '/room/room_list',
      data: {
        key: wx.getStorageSync('key'),
        page: 1,
        limit: that.data.limit,
        uid: e.id

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功')
        if (res.data.code == '200') {
          console.log(res.data.room)
          console.log(res.data)
          that.setData({
            'listData': res.data.room,
            'uid': e.id
          })
        } else {
          console.log(res.data)
        }
      }
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
