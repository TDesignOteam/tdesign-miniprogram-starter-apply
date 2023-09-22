// app.js
App({
  onLaunch() {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })

    // 获取topbar相关信息
    const that = this;
    // 顶部状态栏的信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    that.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
    that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    that.globalData.menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
    that.globalData.menuHeight = menuButtonInfo.height;
    that.globalData.menuWidth = menuButtonInfo.width;
    that.globalData.statusBarHeight = systemInfo.statusBarHeight;
  },
  globalData: {
    userInfo: null,

    // 自定义topbar相关信息
    navBarHeight: 0, // 导航栏高度
    statusBarHeight: 0, // 状态栏的高度
    menuRight: 0, // 胶囊距右方间距（保持左、右间距一致）
    menuBottom: 0, // 胶囊距底部间距（保持底部间距一致）
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    menuWidth: 0, // 胶囊宽度（自定义内容可与胶囊宽度保证一致）
  }
})