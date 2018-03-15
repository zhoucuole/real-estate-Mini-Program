// 我的
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    code: '../../images/code.png',
    userInfo: {},
    qr_url: '',
    modal_flag: false,
    count:''
  },
  showQR: function (e) {
    var that = this
    wx.request({
      url: cm.webUrl + '/user/get_qrcode',
      data: {
        key: wx.getStorageSync('key')
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'QR_url': res.data.qrcode,
            'modal_flag': !that.data.modal_flag
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            image: '/images/close-tip.png',
            duration: 2000,
            complete: function () {
              that.setData({
                'modal_flag': !that.data.modal_flag
              })
            }
          })

        }
      }
    })
  },
  modalHide: function (e) {
    this.setData({
      modal_flag: false
    })
  },
  onShow: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/user/index',
      data: {
        key: wx.getStorageSync('key'),
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'count': res.data
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
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        'userInfo.dec': '生命时间段撒旦及倒萨及大时代撒旦及啊搜到'
      })
    })
  }
})
