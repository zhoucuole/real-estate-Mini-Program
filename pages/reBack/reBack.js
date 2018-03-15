// 找回密码
var cm = require('../../utils/common.js')
var app = getApp()
Page({
  data: {
    userInfo: {},
    phone: '',
    // 验证码配置
    codeType: {
      text: '获取',
      bool: false,
      time: 60
    },
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  // 找回密码
  formSubmit: function (e) {
    var obj = e.detail.value
    if (!/^[0-9A-Za-z]{6,21}$/.test(obj.psd)) {

      wx.showToast({
        title: '格式错误，输入6-21个字符',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
    if (obj.psd == "") {

      wx.showToast({
        title: '新密码不能为空',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
 
    if (obj.psd != obj.rpsd) {

      wx.showToast({
        title: '验证密码失败',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
    wx.showLoading({
      title: '',
      mask: true,
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  phoneChange: function(e){
    console.log(e)
    this.setData({
      phone: e.detail.value
    })
  },
  // 发送验证码
  sendSMS: function (e) {
    //发搜验证码
    let that = this
    if (!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(that.data.phone)) {
      wx.showToast({
        title: '手机号错误',
        image: "/images/close-tip.png",
        duration: 2000
      })
      return
    }
    //判断是否过时间
    if (that.data.codeType.bool) {
      return
    }
    that.setData({
      codeType: {
        text: '发送中..',
        bool: true
      }
    })
    //todo ajax请求验证码接口
   
    wx.request({
      url: webUrl + '/sms',
      data: {
        'key': key,
        'phone': that.data.newphone
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        if (res.data.success == 1) {
          // 成功请求状态
          wx.showToast({
            title: '已发送验证码',
            icon: 'success',
            duration: 2000
          })
          let time = 60
          let sp = setInterval(function () {
            that.setData({
              codeType: {
                text: time + 's后重新发送',
                bool: true
              }
            })
            time -= 1
            if (time < 1) {
              that.setData({
                codeType: {
                  text: '获取验证码',
                  bool: false
                }
              })
              clearInterval(sp)
            }
          }, 1000)
        } else {
          //  失败请求状态
          that.setData({
            codeType: {
              text: '获取验证码',
              bool: false
            }
          })
          wx.showToast({
            title: res.data.error,
            image: "/images/close-tip1.png",
            duration: 2000
          })
        }
      }

    })
  },
})
