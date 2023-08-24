// pages/purchase-result/index.js
import { fetchPurchase } from '../../services/purchase'

Page({

  /** 页面的初始数据 */
  data: {
    purchaseId: null,
    activity: null,
    attendees: [],
    shareVisible: false
  },

  /** 生命周期函数--监听页面加载 */
  onLoad(options) {
    const { purchaseId } = options
    this.setData({ purchaseId })
    this.getPurchase(purchaseId)
  },

  /** 生命周期函数--监听页面初次渲染完成 */
  onReady() {},

  /** 生命周期函数--监听页面显示 */
  onShow() {},

  /** 生命周期函数--监听页面隐藏 */
  onHide() {},

  /** 生命周期函数--监听页面卸载 */
  onUnload() {},

  /** 页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh() {},

  /** 页面上拉触底事件的处理函数 */
  onReachBottom() {},

  /** 用户点击右上角分享 */
  onShareAppMessage() {},

  /** 获取购买结果 */
  getPurchase(purchaseId) {
    fetchPurchase(purchaseId).then(({ data }) => {
      const { activity, attendees } = data
      this.setData({ activity, attendees })
    })
  },

  /** 打开分享面板 */
  openShare() {
    this.setData({ shareVisible: true })
  },

  /** 关闭分享面板 */
  closeShare() {
    this.setData({ shareVisible: false })
  }
})