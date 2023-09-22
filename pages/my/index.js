// index.js
const app = getApp();
import {
  fetchMyatvs
} from '../../services/fetchMyAtvs';

Page({
  data: {
    navBarHeight: app.globalData.navBarHeight,
    profile: "https://tdesign.gtimg.com/miniprogram/images/avatar1.png",
    username: '蔡宣轩',
    tags: ['29岁', '设计/艺术从业者'],
    myAtvs: []
  },

  // 加载页面数据
  async loadData() {
    const {
      data
    } = await fetchMyatvs();
    this.setData({
      myAtvs: data
    })
  },

  onLoad() {
    this.loadData();
  }
})