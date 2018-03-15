// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    // 预付订单列表
    orderList: [
      {
        pay: 1000,
        avatar: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '大刚翡翠蓝王南区大刚翡翠蓝王南区大刚翡翠蓝王南区', 
        price: 78,
        dath: 105,
        dec: '3室1厅 | 南北 | 简装',
        id: 1,
        type: 0, //状态 ， 退款 ， 完成
      },
      {
        pay: 1000,
        avatar: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '大刚翡翠蓝王南区',
        price: 78,
        dath: 105,
        dec: '3室1厅 | 南北 | 简装',
        id: 1,
        type: 1,
      },
      {
        pay: 1000,
        avatar: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '大刚翡翠蓝王南区',
        price: 78,
        dath: 105,
        dec: '3室1厅 | 南北 | 简装',
        id: 1,
        type: 2,
      }
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

