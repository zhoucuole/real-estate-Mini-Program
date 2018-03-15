//app.js
var webUrl = 'fdc.lin-lianhuai.site'
App({
  onLaunch: function() {
    
  },
  onShow: function(){
    //调用API从本地缓存中获取数据
    if (!wx.getStorageSync("key")) {
      wx.reLaunch({
        url: "../login/login",
      })
    }
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //获取用户信息
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          console.log(res)
          typeof cb == "function" && cb(that.globalData.userInfo)

        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})

