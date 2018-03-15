// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    base: '你是一个好人',
    expert_report: '你不是一个好人',
    expert_recommend: '你是一只单身狗',

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
