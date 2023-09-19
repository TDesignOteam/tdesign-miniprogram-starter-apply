// index.js
const app = getApp();
import {
  fetchSwiperLis,
  fetchAtvsList
} from '../../services/fetchAtvsList';

Page({
  data: {
    navBarHeight: app.globalData.navBarHeight,

    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList: [],
    atvsList: [],

    selectedColTitle: 1,

    popupVisible: false
  },

  // 转换标题的事件
  selectColTitile(e) {
    this.setData({
      selectedColTitle: parseInt(e.currentTarget.dataset.index)
    });
  },

  // 加载页面数据
  async loadData() {
    const swiper = await fetchSwiperLis();
    const atvsList = await fetchAtvsList();
    this.setData({
      swiperList: swiper.data,
      atvsList: atvsList.data
    })
  },

  onLoad() {
    this.loadData();
  }
})