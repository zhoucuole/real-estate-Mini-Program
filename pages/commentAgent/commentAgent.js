// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {

    reservation_id: '',
    userInfo: {},
    comment: '',
    tn: 40,
    tnum: 0, //限制字数
    star: 0,
    agentData: {}
  },
  onLoad: function (params) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    wx.request({
      url: cm.webUrl + '/agency/comment',
      data: {
        key: wx.getStorageSync('key'),
        reservation_id: params.id
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'agentData': res.data.agency,
            'reservation_id': params.id
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
  // 监听输入
  textChange: function (e) {
    var that = this
    var comment = e.detail.value
    var length = comment.length

    that.setData({
      comment: e.detail.value,
      tnum: length
    })
  },
  // 修改星级
  starChange: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      star: id
    })
  },
  //  提交
  subChange: function () {
    var that = this
    wx.request({
      url: cm.webUrl + '/agency/comment_agency',
      data: {
        key: wx.getStorageSync('key'),
        reservation_id: that.data.reservation_id,
        content: that.data.comment,
        score: that.data.star
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000,
          })
          setTimeout(function(){
            wx.navigateBack()
          },1300)
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
  toPhone: function (e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  },
})
