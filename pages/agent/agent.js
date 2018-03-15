// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    agent_info: {},
    comment: [],
    listData: [],
    comment_count: '',
    look_count:'',
    room_count:'',
  },
  onLoad: function (e) {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    //获取经纪人数据
    wx.request({
      url: cm.webUrl + '/agency/detail',
      data: {
        key: wx.getStorageSync('key'),
        id: e.id,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'agent_info': res.data.employee,
            'comment': res.data.comment,
            'listData': res.data.room,
            'comment_count': res.data.comment_count,
            'look_count': res.data.look_count,
            'room_count': res.data.room_count,
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
  toPhone: function (e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  }
})
