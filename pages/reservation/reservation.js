// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    reservationList: [],
    page: 2,
    limit: 10,
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.request({
      url: cm.webUrl + '/reservation/lst',
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
            'reservationList': res.data.reservation
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
  // 拨打电话
  toPhone: function (e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  },
  cancelChange: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    wx.showModal({
      title: '提示',
      confirmColor: "#fad707",
      confirmText: '确定',
      content: '同一房子，一个月限制取消3次，超出次数需下个月才可以预约，或致电公司，后台给予开放，是否确定取消预约？',
      success: function (res) {
        if (res.confirm) {
          console.log('form发生了submit事件，携带数据为：', e)
          wx.request({
            url: cm.webUrl + '/reservation/cancel',
            data: {
              key: wx.getStorageSync('key'),
              id: e.target.dataset.id
            },
            header: { 'content-type': 'application/json' },
            success: function (res) {
              console.log(res.data)
              if (res.data.code == '200') {
                wx.showToast({
                  title: '取消成功',
                  icon: 'success',
                  duration: 2000,
                  success: function () {
                    console.log(e)
                    var arr = that.data.reservationList
                    arr[e.target.dataset.index].is_cancel = '1'
                    that.setData({
                      'reservationList': arr
                    })
                  }
                })
              } else {
                wx.showToast({
                  title: res.data.msg,
                  image: "/images/close-tip.png",
                  duration: 2000,
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
      url: cm.webUrl + '/reservation/lst',
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
              'reservationList': [...that.data.reservationList, ...res.data.reservation],
              'page': that.data.page + 1
            })
          }

        }
      }
    })
  }
})
