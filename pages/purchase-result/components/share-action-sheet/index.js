// pages/purchase-result/components/share-action-sheet/index.js
import { fetchFriends } from '../../../../services/friend'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: Boolean
  },

  /** 组件的初始数据 */
  data: {
    friends: [],
    apps: [
      { icon: '/images/app-icon-wechat.png', name: '微信' },
      { icon: '/images/app-icon-qq.png', name: 'QQ' },
      { icon: '/images/app-icon-doc.png', name: '腾讯文档' },
      { icon: '/images/app-icon-map.png', name: '腾讯地图' },
      { icon: '/images/app-icon-music.png', name: 'QQ音乐' },
    ]
  },

  /** 组件的生命周期函数 */
  lifetimes: {
    /** 在组件实例刚刚被创建时执行 */
    created() {
      this.getFriends()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getFriends() {
      fetchFriends().then(({ data }) => {
        this.setData({ friends: data })
      })
    },

    close() {
      this.triggerEvent('close')
    },
  }
})
