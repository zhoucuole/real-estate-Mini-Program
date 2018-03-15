// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    report_list: [
      {
        person: '阳光',
        z_time: '2017年6月',
        f_time: '207年9月',
      },
      {
        person: '阳光',
        z_time: '2017年6月',
        f_time: '207年9月',
      },
    ]
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
