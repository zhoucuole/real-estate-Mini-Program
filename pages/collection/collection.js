// 我的收藏
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    page: 2,
    limit: 10,
    userInfo: {},
    // 开始坐标
    startX: 0,
    check: null,
    // 列表
    listData: []
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
      url: cm.webUrl + '/user/store',
      data: {
        key: wx.getStorageSync('key'),
        page: 1,
        limit: that.data.limit,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'listData': res.data.store
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
  scroll: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/user/store',
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          if (res.data.room.length >= 1) {
            that.setData({
              'listData': [...that.data.listData, ...res.data.store],
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
  touchS: function (e) {
    console.log(e)
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      })
    }
  },
  //触摸时触发，手指在屏幕上每移动一次，触发一次
  touchM: function (e) {
    var i = e.currentTarget.dataset.index

    var that = this
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var disX = that.data.startX - moveX;
      if (disX > 20) {
        that.setData({
          check: i,
        })

      }
      if (disX < -20) {
        that.setData({
          check: null,
        })
      }
    }


  },
  delChange: function (e) {
    var that = this
    wx.showModal({
      title: '提示',
      confirmColor: "#fad707",
      confirmText: '继续',
      content: '您确定要删除么？',
      success: function (res) {
        if (res.confirm) {
          var id = e.currentTarget.dataset.id
          console.log(id)

          var m = []
          that.data.listData.map(function (e) {
            if (e.id != id) {
              m.push(e)
            }
          })

          that.setData({
            listData: m,
            check: null,
          })



        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }
})
