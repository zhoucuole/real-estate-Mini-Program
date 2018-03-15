// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    name: '',
    phone: '',
    price: '',
    advace: '',
    check: 0,
    // 选项
    items: [
      { name: 1, value: '是', checked: 'true' },
      { name: 0, value: '否'},
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
  },
  // 电话
  phoneChange: function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  // 用户名
  nameChange: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  // 还价金额
  priceChange: function(e){
    this.setData({
      price: e.detail.value
    })
  },
  // 诚意金额
  advChange: function (e) {
    this.setData({
      advance: e.detail.value
    })
  },
  formSubmit: function (e) {
    wx.showModal({
      title: '提示',
      confirmColor:"#fad707",
      confirmText:'继续',
      content: '当房源发布人与其他买家成功达成交易时，您的定金平台将自动退还，其他情况不予退，是否继续支付？',
      success: function (res) {
        if (res.confirm) {
          console.log('form发生了submit事件，携带数据为：', e.detail.value)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
})
