// 预约
var cm = require('../../utils/common.js')
var amapFile = require('../../utils/amap-wx.js')
var app = getApp()
var webUrl = cm.webUrl
Page({
  data: {
    //房数据
    room: {},
    userInfo: {},
    // 用户列表
    userList: [
      {
        avatar: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '大户室',
        star: 3,
        dec: '吉萨按时间嗲是东京爱情故事 撒较低按时间嗲',
        time: '2017-10-29'
      },
      {
        avatar: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '大户室',
        star: 1,
        dec: '吉萨按时间嗲是东京爱情故事 撒较低按时间嗲',
        time: '2017-10-29'
      }
    ],

    mapSrc: '',
    // 猜你喜欢
    listData: [],
    // 是否收藏
    loveCheck: false,
    // 收藏id
    store: '',
    // 模块框  --- 预约
    modeCheck: false,

  },
  onLoad: function (e) {
    console.log('onLoad')
    console.log(e.id)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    //获取房源信息
    wx.request({
      url: webUrl + '/room/detail',
      data: {
        key: wx.getStorageSync('key'),
        room_id: e.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功')
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'room': res.data.room,
            'listData': res.data.guess_like
          })
          if (res.data.store != null) {
            that.setData({
              'loveCheck': true,
              'store': res.data.store.id
            })
          }
          var location = res.data.room.lng + ',' + res.data.room.lat
          var myAmapFun = new amapFile.AMapWX({ key: "0c1070a5fb3fe1ff05f3f29b5417c9e7" });
          wx.getSystemInfo({
            success: function (data) {
              var height = 250;
              var width = data.windowWidth;
              var size = width + "*" + height;
              myAmapFun.getStaticmap({
                zoom: 18,
                size: size,
                location: [location],
                scale: 1,
                markers: "mid,0xFFFF00,:113.324520,23.099994",
                success: function (data) {
                  console.log(data)
                  that.setData({
                    'mapSrc': data.url
                  })
                },
                fail: function (info) {
                  wx.showModal({ title: info.errMsg })
                }
              })

            }
          })
        } else {
          console.log(res.data.msg)
        }
      }
    })



  },
  // 预览图片
  prevImg: function (e) {
    console.log(e)
    var arr = []
    arr.push(e.target.dataset.src)
    this.data.room.gallery.detail.map(function (a) {
      arr.push('https://' + a.src)
    })
    wx.previewImage({
      current: e.target.dataset.src,
      // 当前显示图片的http链接
      urls: arr // 需要预览的图片http链接列表
    })
  },
  prevImg2: function (e) {
    console.log(e)
    var arr = []
    arr.push(e.target.dataset.src)
    this.data.room.gallery.fashion.map(function (a) {
      arr.push('https://' + a.src)
    })
    wx.previewImage({
      current: e.target.dataset.src,
      // 当前显示图片的http链接
      urls: arr // 需要预览的图片http链接列表
    })
  },
  // 拨打电话
  toPhone: function (e) {
    var phone = e.currentTarget.dataset.phone
    wx.makePhoneCall({
      phoneNumber: phone //仅为示例，并非真实的电话号码
    })
  },
  // 前往位置
  mapShow: function (e) {
    var lat = parseFloat(this.data.room.lat)
    var lng = parseFloat(this.data.room.lng)
    wx.openLocation({
      latitude: lat,
      longitude: lng,
      scale: 18,

    })

  },
  // 显示、隐藏预约
  resModeChange: function () {
    var that = this
    that.setData({
      modeCheck: !that.data.modeCheck
    })

  },
  // 日期选择
  dateChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  // 收藏
  loveChange: function (e) {
    var url = ''
    var that = this
    var message = ''
    var data = ''
    wx.showLoading({
      title: '',
      mask: true
    })
    if (that.data.loveCheck) {
      url = '/user/cancel_store'
      message = '取消成功'
      data = [that.data.store]
    } else {
      url = '/room/store'
      message = '收藏成功'
      data = that.data.room.id
    }
    wx.request({
      url: cm.webUrl + url,
      data: {
        key: wx.getStorageSync('key'),
        id: data
      },
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        if (res.data.code == '200') {
          wx.showToast({
            title: message,
            icon: 'success',
            duration: 2000
          })
          that.setData({
            'loveCheck': !that.data.loveCheck,
            'store': res.data.id
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

  writeComment: function (e) {
    wx.navigateTo({
      url: '../commentNewHouse/commentNewHouse?id=' + this.data.room.id,
    })
  },
  // 提交预约
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this
    wx.showLoading({
      title: '',
      mask: true
    })

    wx.request({
      url: cm.webUrl + '/reservation/order',
      data: {
        key: wx.getStorageSync('key'),
        room_id: that.data.room.id,
        name: e.detail.value.username,
        phone: e.detail.value.phone,
        date: e.detail.value.time
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000,
            success: function () {
              wx.redirectTo({
                url: '../reservation/reservation',
              })
            }
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            image: "/images/close-tip.png",
            duration: 2000
          })
        }
      }
    })
  },

})
