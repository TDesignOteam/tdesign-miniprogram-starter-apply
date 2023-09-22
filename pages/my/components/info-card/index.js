// pages/my/components/info-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "info": {
      "type": Object,
      "value": {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    info: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    attached(){
      this.setData({
        info: this.properties.info
      })
    }
  }
})
