var webUrl = 'https://fdc.lin-lianhuai.site'
//调用API从本地缓存中获取数据

function checkLogin(that,func){
  if (!wx.getStorageSync("key")) {
    wx.reLaunch({
      url: "/pages/login/login",
    })
  }

  //是否需要调用
  if(func){
    func()
  }
}

module.exports = {
  checkLogin,
  webUrl
}