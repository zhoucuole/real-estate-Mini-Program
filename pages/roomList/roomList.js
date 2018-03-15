/f/
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    page: 2,
    limit: 10,
    room_type: '', //房屋类型
    scrollTop: 0,//最小面积
    selected: '',  // 选中的筛选
    shi: 0,
    wei: 0,
    ting: 0,
    sort: 0,
    data: {},
    structureList: {
      name: ['零', '一', '二', '三', '四', '五'],
    },
    show: { // popup flag
      'price': false,
      'structure': false,
      'more': false,
    },
    sortWay: ['总价从低到高', '总价从高到低', '面积从小到大', '面积从大到小'],
    priceList: [  // price list
      { name: '不限', min: '0', max: '99999' },
      { name: '50万以下', min: '0', max: '50' },
      { name: '50-100万', min: '50', max: '100' },
      { name: '100-150万', min: '100', max: '150' },
      { name: '150-200万', min: '150', max: '200' },
      { name: '200-300万', min: '250', max: '300' },
    ],
    varietyList: [{ name: '临街商铺', value: '4' }, { name: '购物中心', value: '5' }, { name: '办公配套', value: '6' },],
    areaList: [  // price list
      { name: '20m²以下', min: '0', max: '20' },
      { name: '20-50m²', min: '20', max: '50' },
      { name: '50-100m²', min: '50', max: '100' },
      { name: '100-150m²', min: '100', max: '150' },
      { name: '150-200m²', min: '150', max: '200' },
      { name: '200-500m²', min: '200', max: '500' },
      { name: '500-1000m²', min: '500', max: '1000' },
      { name: '1000m²以上', min: '1000', max: '99999' },
    ],
    moreList1: [ // more list 
      {
        group: '面积',
        name: 'area',
        value: [{ max: 40, min: 0 }, { max: 60, min: 40 }, { max: 80, min: 60 }, { max: 100, min: 80 }, { max: 120, min: 100 }, { max: 144, min: 120 }, { max: 99999, min: 144 },
        ],
        active: 'default', // 被选中的 range:subs
        subs: ['40m²以下', '40-60m²', '60-80m²', '80-100m²', '100-120m²', '120-144m²', '144m²以上']
      },
      {
        group: '类型',
        name: 'variety',
        value: [1, 2, 3],
        active: 'default', // 被选中的 range:subs
        subs: ['住宅', '公寓', '别墅']
      },
      {
        group: '装修',
        name: 'decoration',
        value: [1, 3, 2],
        active: 'default', // 被选中的 range:subs
        subs: ['毛坯', '简装', '精装']
      },
      {
        group: '朝向',
        name: 'orientation',
        value: [1, 2, 3, 4],
        active: 'default', // 被选中的 range:subs
        subs: ['朝东', '朝南', '朝西', '朝北']
      },
      {
        group: '楼龄',
        name: 'age',
        value: [{ min: 2012, max: 2017 }, { min: 2007, max: 2012 }, { min: 1997, max: 2007 }, { min: 0, max: 1997 }],
        active: 'default', // 被选中的 range:subs
        subs: ['5年以内', '5-10年', '10-20年', '20年以上']
      },
    ],
    moreList2: [ // more list 
      {
        group: '装修',
        name: 'decoration',
        value: [1, 3, 2],
        active: 'default', // 被选中的 range:subs
        subs: ['毛坯', '简装', '精装']
      },
      {
        group: '类型',
        name: 'variety',
        value: [1, 2, 3],
        active: 'default', // 被选中的 range:subs
        subs: ['住宅', '公寓', '别墅']
      },
      {
        group: '面积',
        name: 'area',
        value: [{ max: 40, min: 0 }, { max: 60, min: 40 }, { max: 80, min: 60 }, { max: 100, min: 80 }, { max: 120, min: 100 }, { max: 144, min: 120 }, { max: 99999, min: 144 },
        ],
        active: 'default', // 被选中的 range:subs
        subs: ['40m²以下', '40-60m²', '60-80m²', '80-100m²', '100-120m²', '120-144m²', '144m²以上']
      },
      {
        group: '排序',
        name: 'order',
        value: [],
        active: 'default', // 被选中的 range:subs
        subs: ['开盘时间顺序', '开盘时间倒序']
      },
    ],
    listData: [  //house list
    ]
  },
  backToTop: function (e) {
    this.setData({
      'scrollTop': 0
    })
  },
  moreSubmit1: function (e) {
    var that = this
    var data = {}
    data.min_area = that.data.moreList1[0].value[area].min
    data.max_area = that.data.moreList1[0].value[area].max
    data.variety = that.data.moreList1[1].value[variety]
    data.decoration = that.data.moreList1[2].value[decoration]
    data.orientation = that.data.moreList1[3].value[orientation]
    data.min_age = that.data.moreList1[4].value[age].min
    data.max_age = that.data.moreList1[4].value[age].max
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        page: 1,
        limit: that.data.limit,
        data: data
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'selected': '',
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
  moreSubmit2: function (e) {
    var that = this
    var data = {}
    data.min_area = that.data.moreList1[2].value[area].min
    data.max_area = that.data.moreList1[2].value[area].max
    data.variety = that.data.moreList1[1].value[variety]
    data.decoration = that.data.moreList1[0].value[decoration]
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        page: 1,
        limit: that.data.limit,
        data: data
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          that.setData({
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'selected': '',
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
  priceSubmit: function (e) {
    var that = this
    var data = {
      'max_price': e.detail.value.max,
      'min_price': e.detail.value.min
    }
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        data: data,
        page: 1,
        limit: that.data.limit
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
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'selected': '',
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
  priceChange: function (e) { // change query.price
    var that = this
    console.log(e)
    var data = {
      'max_price': e.target.dataset.max,
      'min_price': e.target.dataset.min
    }
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        data: data,
        limit: that.data.limit,
        page: '1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功-房源列表')
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'data': data,
            'page': 2,
            'selected': e.target.dataset.name
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
  areaChange: function (e) { // change query.price
    var that = this
    console.log(e)
    var data = {
      'max_area': e.target.dataset.max,
      'min_area': e.target.dataset.min
    }
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        data: data,
        limit: that.data.limit,
        page: '1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功-房源列表')
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'data': data,
            'page': 2,
            'selected': e.target.dataset.name
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
  varietyChange: function (e) { // change query.price
    var that = this
    console.log(e)
    var data = {
      'variety': e.target.dataset.value,
    }
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        data: data,
        limit: that.data.limit,
        page: '1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功-房源列表')
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'data': data,
            'page': 2,
            'selected': e.target.dataset.name
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
  structureSubmit: function (e) {
    var that = this
    var data = {}
    data.room = that.data.shi
    data.hall = that.data.ting
    data.toilet = that.data.wei
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        data: data,
        page: 1,
        limit: that.data.limit
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功-房源列表')
        if (res.data.code == '200') {
          console.log(res.data)
          that.setData({
            'listData': res.data.room,
            'show': { price: false, structure: false, more: false },
            'selected': '',
            'page': '2',
            'data': data
          })
        } else {
          console.log(res.data)
        }
      }
    })
  },
  structureChange: function (e) {// change query.structure
    console.log(e)
    this.setData({
      [e.target.dataset.flag]: e.detail.value
    })
  },
  subChange: function (e) { //切换选中的sub
    var data = {}
    data[e.target.dataset.key + '[' + e.target.dataset.index + '].active'] = e.target.dataset.flag
    console.log(data)
    this.setData(data)
  },
  tabChange: function (e) { //切换popup
    console.log(this.show)
    if (this.data.show[e.target.dataset.flag] == true || e.target.dataset.flag == 'modal') {   // hide all
      this.setData({
        'show.price': false,
        'show.structure': false,
        'show.more': false,
      })
    } else {
      if (e.target.dataset.flag == 'price') { //show price
        this.setData({
          'show.price': true,
          'show.structure': false,
          'show.more': false,
        })
      }
      if (e.target.dataset.flag == 'structure') { //show structrure
        this.setData({
          'show.price': false,
          'show.structure': true,
          'show.more': false,
        })
      }
      if (e.target.dataset.flag == 'more') { //show more
        this.setData({
          'show.price': false,
          'show.structure': false,
          'show.more': true,
        })
      }
    }
  },
  sortChange: function (e) {
    var that = this
    console.log(e)
    var data = {}
    data.order = e.detail.value + 1
    wx.request({
      url: cm.webUrl + '/room/lst',
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
            'listData': res.data.room,
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
  searchChange: function (e) {
    console.log(e)
    this.setData({
      'searchText': e.detail.value
    })
  },
  search: function (e) {
    var that = this
    console.log(e)
    var data = {
      'title': that.data.searchText
    }
    wx.request({
      url: cm.webUrl + '/room/lst',
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
            'listData': res.data.room,
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
  scroll: function (e) {
    var that = this
    var data = that.data.data
    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: that.data.room_type,
        page: that.data.page,
        limit: that.data.limit,
        data: data
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('请求成功-房源列表')
        if (res.data.code == '200') {
          console.log(res.data)
          if (res.data.room.length > 0) {
            that.setData({
              'listData': [...listData, ...res.data.room],
              'page': that.data.page + 1,
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
  onLoad: function (e) {
    console.log('onLoad')
    var that = this
    //获取房屋列表
    if (e.room_type == '2') {
      wx.setNavigationBarTitle({ title: '一手房' })
    }
    if (e.room_type == '1') {
      wx.setNavigationBarTitle({ title: '二手房' })
    }
    if (e.room_type == '5') {
      wx.setNavigationBarTitle({ title: '商铺' })
    }
    if (e.room_type == '6') {
      wx.setNavigationBarTitle({ title: '写字楼' })
    }

    that.setData({
      'room_type': e.room_type
    })

    wx.request({
      url: cm.webUrl + '/room/lst',
      data: {
        key: wx.getStorageSync('key'),
        room_type: e.room_type,
        page: 1,
        limit: that.data.limit
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
            'listData': res.data.room,
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
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
})
