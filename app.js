//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    //初始化授权
    wx.getSetting({
      success(res) {
        console.log(res)
        // 是否授权用户信息
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.getUserInfo({
                success(res) {
                  this.globalData.userInfo = res.userInfo;
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          })
        }
        // 是否授权地理位置
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                success: function(res) {
                  console.log(res)
                  const latitude = res.latitude;
                  const longitude = res.longitude;
                  // 去后台获取地理位置
                },
              })
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})