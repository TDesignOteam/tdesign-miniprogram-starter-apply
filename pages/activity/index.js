// pages/activity/index.js
const app = getApp();

import {
  fetchAtvDetails
} from "../../services/fetchAtvDetails";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    // 轮播图
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    guestList: [],
    venueList: [],

    // 操作面板
    like: false,
    priceRange: '',

    // 弹窗信息
    popupVisible: false,
    atvTitle: '',
    date: '',
    location: '',
    score: '',
    profiles: [],
    comments: [],
    introduction: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadData();
  },

  // 加载页面信息
  async loadData() {
    const detail = await fetchAtvDetails();
    console.log(detail);
    this.setData({
      guestList: detail.guestList,
      venueList: detail.venueList,
      profiles: detail.profiles,
      priceRange: detail.priceRange,
      atvTitle: detail.atvTitle,
      date: detail.date,
      location: detail.location,
      score: detail.score,
      comments: detail.comments,
      introduction: detail.introduction
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  // 点击喜欢按钮：
  handleLike() {
    let newStatus = !this.data.like;
    this.setData({
      like: newStatus
    })
  },

  // 点击弹窗开关
  handlePopup() {
    let newStatus = !this.data.popupVisible;
    this.setData({
      popupVisible: newStatus
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})