// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    info: {
      name:'阳光',
      phone:'1658458755',
      time:'2017-06-01',
    }
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
  dateChange: function(e){
    this.setData({
      'info.time': e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form，携带值为', e.detail.value)
  },
})
