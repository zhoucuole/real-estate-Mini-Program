// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    page: 2,
    limit: 10,
    record_list: []
  },
  scroll: function () {
    var that = this

    wx.request({
      url: cm.webUrl + '/user/room_log',
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (res.data.code == '200') {
          console.log(res.data)
          if (res.data.room.length > 1) {
            that.setData({
              'record_list': [...that.data.record_list, ...res.data.room],
              'page':that.data.page+1
            })
          }

        } else {
          console.log(res.data)
          wx.showToast({
            title: res.data.msg,
            image: '/images/close-tip.png',
            duration: 2000
          })
        }
      }
    })
  },
  onShow: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/user/room_log',
      data: {
        key: wx.getStorageSync('key'),
        page: 1,
        limit: that.data.limit
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'record_list': res.data.room
          })
        } else {
          console.log(res.data)
          wx.showToast({
            title: res.data.msg,
            image: '/images/close-tip.png',
            duration: 2000
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
  },
  toPhone: function (e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  },
  //评价经纪人
  toComment: function (e) {
    console.log(e.target.dataset.id)
    wx.navigateTo({
      url: '../commentAgent/commentAgent?id=' + e.target.dataset.id,
    })
  }

})
