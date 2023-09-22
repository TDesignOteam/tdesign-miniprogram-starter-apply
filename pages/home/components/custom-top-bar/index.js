// components/custom-top-bar/index.js
const app = getApp();

// 使用定位服务
import {
  fetchLocation
} from '../../../../services/fetchLocation';

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

    city: '深圳市'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转选择地区的页面
    chooseLocation: function () {
      wx.navigateTo({
        url: '/pages/home/chooseLocation/index',
      })
    }
  },
  lifetimes: {
    attached: function () {
      fetchLocation().then((data)=>{
        console.log(data);
        // this.setData({
        //   city: data
        // })
      });
    }
  }
})