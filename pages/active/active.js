//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    house_list: [ //房源信息
      {
        img_url: '../../images/house.png',
        title: '第一间房',
        price: 998,
        before_price: 1000,
        square: 200,
      },
      {
        img_url: '../../images/house.png',
        title: '第二间房',
        price: 998,
        before_price: 1000,
        square: 200,
      },
    ],
    police_list: [
      {
        img_url: '../../images/camera.png',
        title: '超级优惠强势来袭',
        context: '详情请看介绍好吗？好的，呵呵！你讲晒啦。详情请看介绍好吗？好的，呵呵！你讲晒啦。',
        time: '04-18  15:22'
      },
      {
        img_url: '../../images/camera.png',
        title: '超级优惠强势来袭',
        context: '详情请看介绍好吗？好的，呵呵！你讲晒啦。详情请看介绍好吗？好的，呵呵！你讲晒啦。',
        time: '04-18  15:22'
      },
    ],
    tab_flag: 'house',   //tab切换 house or police
  },
  //tab切换
  tab_change: function (event) {
    this.setData({
      'tab_flag': event.currentTarget.dataset.flag
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
