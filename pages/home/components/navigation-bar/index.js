// pages/home/components/navigation-bar/index.js
import { fetchCurrentCity } from '../../../../services/location'
const app = getApp()

Component({
  /** 组件的属性列表 */
  properties: {},

  /** 组件的初始数据 */
  data: {
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
    capsule: wx.getMenuButtonBoundingClientRect(),
    city: null, 
    loading: true
  },

  /** 组件的生命周期 */
  lifetimes: {
    attached: function() {
      this.getCurrentCity()
    }
  },

  /** 组件的方法列表 */
  methods: {
    /** 获取当前所在城市 */
    getCurrentCity() {
      fetchCurrentCity().then(({ data }) => {
        this.setData({ city: data })
        app.globalData.city = data
        this.triggerEvent('select-city')
      }).finally(() => {
        this.setData({ loading: false })
      })
    },

    /** 打开地区选择页面 */
    selectCity() {
      const app = getApp()
      wx.navigateTo({
        url: '/pages/city-picker/index?city=' + app.globalData.city,
        events: {
          /** 完成选择 */
          selectCity: (city) => {
            this.setData({ city })
            app.globalData.city = city
            this.triggerEvent('select-city')
          }
        }
      })
    },
  }
})
