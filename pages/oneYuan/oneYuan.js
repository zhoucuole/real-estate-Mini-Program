// 预约
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    step: '2',  //状态 1 or 2 or 3 or 4
    userInfo:"",
    time: "2017-07-01",
    floorList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], //楼层列表
    directionList:['朝东','朝东南','朝西','朝西南','朝南','朝北','朝东北'],
    // 付款方式选项
    payCheck: [
      { name: 1, value: '按揭', checked: 'true' },
      { name: 0, value: '全款' },
    ],
    // 购房用途 
    purposeCheck: [
      { name: 1, value: '投资', checked: 'true' },
      { name: 0, value: '自住' },
    ],
    renovationCheck: [
      { name: 1, value: '是', checked: 'true' },
      { name: 0, value: '否' },
    ],
    supportList: [
      {
        id: 0,
        name: '商业',
        check: true,
      },
      {
        id: 1,
        name: '教育',
        check: false,
      },
      {
        id: 2,
        name: '银行',
        check: false,
      },
      {
        id: 3,
        name: '医疗',
        check: false,
      },
      {
        id: 4,
        name: '地铁',
        check: false,
      },
      {
        id: 5,
        name: '公交',
        check: false,
      },
      {
        id: 6,
        name: '购物',
        check: false,
      },
      {
        id: 7,
        name: '餐饮',
        check: false,
      },
    ]
    
  },
  // 提交置业
  formSubmit:function(e){
    console.log(this.data.supportList)
    console.log('form，携带值为', e.detail.value)
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
  // 日期选择
  dateChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  //修改付款选择
  payChange: function (e) {
    console.log(e.detail.value)
    
  },
  // 楼层选择
  floorChange: function (e) {
    this.setData({
      floor: e.detail.value
    })
  },
  // 楼层选择
  directChange: function (e) {
    this.setData({
      direction: e.detail.value
    })
  },
  // 配套选择
  selChange: function(e){
    var id = e.currentTarget.dataset.id
    var check = e.currentTarget.dataset.check
    var d = 'supportList['+ id + '].check'
    this.setData({
      [d]: !check
    })
  }
})
