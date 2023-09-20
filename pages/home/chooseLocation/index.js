// pages/home/chooseLocation/index.js
import {
  fetchLocation
} from '../../../services/fetchLocation';
import { cities } from '../../../config/cities';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCity: '深圳',
    indexList: [],
    hotCities: cities.hotCities,
    sortedCities: cities.sortedCities
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      indexList: this.data.sortedCities.map((item) => item.index),
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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

  },

  // 更新定位
  updateLocation() {
    fetchLocation().then((data) => {
      console.log(data);
      // this.setData({
      //   currentLocation: data
      // })
    });
  },
  // 更换当前城市
  changeCity(e) {
    this.setData({
      currentCity: e.currentTarget.dataset.city
    })
  }
})