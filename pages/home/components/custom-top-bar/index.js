// components/custom-top-bar/index.js
const app = getApp();
// 使用定位服务
var QQMapWX = require("../../../../lib/qqmap/qqmap-wx-jssdk");
var qqmapsdk;

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    menuRight: app.globalData.menuRight,
    menuBottom: app.globalData.menuBottom,
    menuHeight: app.globalData.menuHeight,
    menuWidth: app.globalData.menuWidth,

    city: '深圳市',
    title: '主页',

    locateKey: 'K3NBZ-O7NK5-4JLIM-IWXVC-MOD67-6PF5G'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getLocation: function () {
      let component = this;
      qqmapsdk.reverseGeocoder({
        success: function(res){
          console.log(res.result.ad_info.city);
          component.setData({
            city: res.result.ad_info.city
          })
        },
        fail: function(error){
          // console.log(error);
        }
      })
    }
  },
  lifetimes: {
    attached: function(){
      qqmapsdk = new QQMapWX({
        key: this.data.locateKey
      });
      this.getLocation();
    }
  }
})