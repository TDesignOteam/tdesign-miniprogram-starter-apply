// pages/home/components/popupButton/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "text": {
      "type": String,
      "value": '分类内容'
    },
    "reset": {
      "type": Boolean,
      "value": false,
      "observer": "statusReset"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    chosen: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      let newStatus = !this.data.chosen;
      this.setData({
        chosen: newStatus
      })

      this.triggerEvent('clickBtn', newStatus ? {
        chosen: true,
        tag: this.properties.text
      } : {
        chosen: false,
        tag: this.properties.text
      })
    },
    statusReset(){
      this.setData({
        chosen: false
      })
      this.triggerEvent('finshReset');
    }
  }
})