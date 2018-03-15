// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    limit: 8,
    page: 2,
    sortWay: ['综合评分从高到低', '带看量从高到低', '成交量从低到高'],
    sortValue: 0,
    agent_list: [],
    top: 0,
    searchText: ''
  },
  searchChange: function (e) {
    console.log(e)
    this.setData({
      'searchText': e.detail.value
    })
  },
  search: function (e) {
    var that = this
    console.log(e)
    var data = that.data.searchText

    wx.request({
      url: cm.webUrl + '/agency/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        page: 1,
        limit: that.data.limit,
        data: data
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功-房源列表')
        if (res.data.code == '200') {
          console.log(res.data.room)
          console.log(res.data)
          that.setData({
            'agent_list': res.data.data,
            'page': 2,
            'data': data
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
  dateChange: function (e) {
    var that = this
    console.log(e)
    that.setData({
      sortValue: e.detail.value,
      page: 1
    })
    wx.showLoading({
      title: '加载中..',
    })
    wx.request({
      url: cm.webUrl + '/agency/lst',
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit,
        order: that.data.sortValue + 1
      },
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        if (res.data.code == '200') {
          if (res.data.data.length >= 1) {
            that.setData({
              'agent_list': res.data.data,
              'page': that.data.page + 1,
              top: 0
            })
          }
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
  scroll: function () {
    var that = this
    wx.showLoading({
      title: '加载中..',
    })
    console.log(that.data.sortValue)
    //wx请求
    wx.request({
      url: cm.webUrl + '/agency/lst',
      data: {
        key: wx.getStorageSync('key'),
        page: that.data.page,
        limit: that.data.limit,
        order: that.data.sortValue + 1
      },
      success: function (res) {
        console.log(res.data)
        wx.hideLoading()
        if (res.data.code == '200') {
          if (res.data.data.length >= 1) {
            that.setData({
              'agent_list': [...that.data.agent_list, ...res.data.data],
              'page': that.data.page + 1
            })
          }
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
    wx.request({
      url: cm.webUrl + '/agency/lst',
      data: {
        key: wx.getStorageSync('key'),
        page: 1,
        limit: that.data.limit,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'agent_list': res.data.data
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
