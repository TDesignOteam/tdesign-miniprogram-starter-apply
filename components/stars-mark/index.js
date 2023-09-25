// components/stars-mark/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      "type": Number,
      "value": ""
    },
    size: {
      "type": Number,
      "value": ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    size: 16
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached(){
      if(this.properties.size){
        this.setData({
          size: this.properties.size
        })
      } else {
        this.setData({
          size: 16
        })
      }
    }
  }
})
