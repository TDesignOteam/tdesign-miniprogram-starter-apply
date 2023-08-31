// custom-tab-bar/index.js
Component({

  /** 组件的初始数据 */
  data: {
    value: '',
    list: [
      { value: 'home', label: '首页', icon: 'home' },
      { value: 'my', label: '我的', icon: 'user' },
    ],
  },
  lifetimes: {
    ready() {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      if (curPage) {
        const nameRe = /pages\/(\w+)\/index/.exec(curPage.route);
        if (nameRe && nameRe[1])
          this.setData({ value: nameRe[1] })
      }
    }
  },

  /** 组件的方法列表 */
  methods: {
    onChange(event) {
      const { value } =  event.detail
      wx.switchTab({ url: `/pages/${value}/index` })
    },
  }
})
