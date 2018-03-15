//index.js
//获取应用实例
var cm = require('../../utils/common.js')
console.log(cm)
var app = getApp()
var webUrl = cm.webUrl
Page({
  data: {
    // bannerData
    imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    // 搜索值
    searchInput: "",
    userInfo: {},
    // 切换选择值
    selValue: 1,
    // // 资讯src
    // imageUrl: '',
    // // 热点新闻
    // hotTitle: '拉屎阿斯就嗲三角地撒旦及',

    //轮播图片
    advertise:[
      {
        goods_img:'',
      }
    ],
    //热点新闻
    news: {
      ctime: '',
      title: '',
      news_img: '',
    },
    // 列表
    listData: [
      {
        avatar: '',
        status: '',
        title: '',
        village: '',
        room_hall_zh: '',
        area: '',
        feature_json: '',
        price: '',
        unit_price: '',
      },
    ],
  },
  onLoad: function () {
    cm.checkLogin(this)


    var that = this
    //获取初始信息
    wx.request({
      url: webUrl + '/index/index',
      data: {
        key: wx.getStorageSync('key'),
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功')
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'listData': res.data.room,
            'news': res.data.news[0],
            'advertise': res.data.advertise,
          })
        } else {
          console.log(res.data.msg)
        }
      }
    })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })

    })
  },
  // 切换消息
  msgChange: function () {
    wx.navigateTo({
      url: '../message/message',
    })
  },
  // 切换选择
  selChange: function (e) {
    this.setData({
      selValue: e.currentTarget.dataset.id
    })
  },
  // 前往类型筛选
  naChange: function (e) {
    if (e.currentTarget.dataset.id == 3) {
      wx.navigateTo({
        url: '../agentList/agentList',
      })
    } else if (e.currentTarget.dataset.id == 4) {
      wx.navigateTo({
        url: '../publishSelect/publishSelect',
      })
    } else {
      wx.navigateTo({
        url: '../roomList/roomList?room_type=' + e.currentTarget.dataset.id,
      })
    }

  }

})
