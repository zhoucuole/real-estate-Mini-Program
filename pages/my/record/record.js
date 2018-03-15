// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    record_list: [
      {
        people:{
          url:'../../images/headlike.png',
          name:'阳光',
          phone:'4000124657851',
          identity:'经纪人'
        },
        house:{
          url:'../../images/house2.png',
          title:'服务大叔大婶肯定会我的钱的呵呵呵呵呵',
          address:'保利大都汇',
          place:'中区楼层',
          square:'105',
          price:'76',
        },
      },
      {
        people:{
          url:'../../images/headlike.png',
          name:'阳光',
          phone:'4000124657851',
          identity:'经纪人'
        },
        house:{
          url:'../../images/house2.png',
          title:'服务大叔大婶肯定会我的钱的呵呵呵呵呵',
          address:'保利大都汇',
          place:'中区楼层',
          square:'105',
          price:'76',
        },
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
