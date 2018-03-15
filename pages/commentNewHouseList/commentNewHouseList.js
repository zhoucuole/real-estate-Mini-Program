// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    page: 2,
    room_id: '',
    comments: [],
    comments_total: '',
  },
  scroll: function (e) {
    var that = this
    wx.request({
      url: cm.webUrl + '/room/comment_list',
      data: {
        key: wx.getStorageSync('key'),
        room_id: e.id,
        page: that.data.page,
        limit: that.data.limit,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          if (res.data.comments.length > 0) {
            that.setData({
              'comments': res.data.comments,
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
      }
    })
  },
  onLoad: function (e) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    wx.request({
      url: cm.webUrl + '/room/comment_list',
      data: {
        key: wx.getStorageSync('key'),
        room_id: e.id,
        page: 1,
        limit: that.data.limit,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'comments': res.data.comments,
            'comments_total': res.data.comments_total,
            'room_id': e.id
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
})
