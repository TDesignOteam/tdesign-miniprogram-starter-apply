// pages/home/index.js
import { fetchHotActivities, fetchActivities } from '../../services/activity'
Page({

  /** 页面的初始数据 */
  data: {
    city: null,
    navigationBarHeight: 0,   // 顶部导航栏高度
    hotActivities: [],        // 热门推荐活动
    filterVisible: false,     // 是否显示筛选面板
    fieldFilter: [            // 筛选：面向领域
      { value: 0, text: 'IT互联网', selected: false },
      { value: 1, text: '艺术设计', selected: false },
      { value: 2, text: '科技', selected: false },
      { value: 3, text: '电商', selected: false },
      { value: 4, text: '教育', selected: false },
      { value: 5, text: '医疗健康', selected: false },
      { value: 6, text: '心理学', selected: false },
      { value: 7, text: '摄影', selected: false },
    ],
    formFilter: [             // 筛选：活动形式
      { value: 0, text: '讲座', selected: false },
      { value: 1, text: '展览', selected: false },
      { value: 2, text: '工作坊', selected: false },
    ],
    dateFilter: {             // 筛选：活动日期
      visible: false,
      startTime: null,
      endTime: null,
    },
    priceFilter: {            // 筛选：价格区间
      bottomPrice: 0,
      topPrice: 588,
    },
    filterBackup: {},         // 筛选的备份数据

    sortType: 0,              // 活动排序方式（0：最新活动，1：高分活动）
    activities: [],           // 活动列表
    pageIndex: 1,             // 下一次分页查询的页码
    loading: true,            // 是否正在加载
  },

  /** 生命周期函数--监听页面加载 */
  onLoad(options) {
    this.getHotActivities()
  },

  /** 生命周期函数--监听页面初次渲染完成 */
  onReady() {
    wx.createSelectorQuery()
      .select('.navigation-bar').boundingClientRect()
      .exec((res) => {
        this.setData({ navigationBarHeight: res[0].height })
      });
  },

  /** 生命周期函数--监听页面显示 */
  onShow() {
    this.getTabBar().setData({ value: 'home' })
  },

  /** 生命周期函数--监听页面隐藏 */
  onHide() {},

  /** 生命周期函数--监听页面卸载 */
  onUnload() {},

  /** 页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh() {},

  /** 页面上拉触底事件的处理函数 */
  onReachBottom() {
    if (this.data.loading)
      return
    this.getActivities()
  },

  /** 用户点击右上角分享 */
  onShareAppMessage() {},

  /** 获取热门推荐活动列表 */
  getHotActivities() {
    fetchHotActivities().then(({ data }) => {
      this.setData({ hotActivities: [...data] })
    })
  },

  /** 点击热门推荐活动 */
  handleTapHotActivity({ detail }) {
    const activityId = this.data.hotActivities[detail.index].activityId
    wx.navigateTo({ url: '/pages/activity/index?activityId=' + activityId })
  },

  /** 修改排序方式 */
  changeSortType(event) {
    const sortType = event.currentTarget.dataset.type
    this.setData({ sortType })
    this.refreshActivities()
  },

  /** 打开活动筛选 */
  openFilter() {
    this.backupFilter()
    this.setData({ filterVisible: true })
  },

  /** 备份筛选数据 */
  backupFilter() {
    const { fieldFilter, formFilter, dateFilter, priceFilter } = this.data
    this.data.filterBackup = JSON.parse(JSON.stringify({
      fieldFilter,
      formFilter,
      dateFilter,
      priceFilter,
    }))
  },

  /** 点击活动筛选遮罩 */
  handleFilterVisibleChange({ detail }) {
    if (!detail.visible)
      this.closeFilter()
  },

  /** 关闭活动筛选，并恢复备份的筛选数据 */
  closeFilter() {
    const data = this.data.filterBackup
    this.setData({
      filterVisible: false,
      ...data
    })
  },

  /** 点击筛选选项 */
  handleTapFilterOption(event) {
    const { filter, index } = event.currentTarget.dataset
    const data = {}
    this.data[filter][index].selected = !this.data[filter][index].selected
    data[filter] = this.data[filter]
    this.setData(data)
  },

  /** 打开日期选择器 */
  openDateFilter() {
    this.setData({
      dateFilter: {
        visible: true,
        startTime: null,
        endTime: null,
      }
    })
  },

  /** 选择日期 */
  selectDate({ detail }) {
    const startTime = detail.value[0], endTime = (detail.value[1] || startTime) + 86400000
    this.setData({
      dateFilter: {
        visible: false,
        startTime,
        endTime,
      }
    })
  },

  /** 选择价格区间 */
  selectPrice({ detail }) {
    this.setData({
      priceFilter: {
        bottomPrice: detail.value[0],
        topPrice: detail.value[1]
      }
    })
  },

  /** 重置活动筛选 */
  resetFilter() {
    const { fieldFilter, formFilter, dateFilter, priceFilter } = this.data
    for (const item of fieldFilter)
      item.selected = false
    for (const item of formFilter)
      item.selected = false
    dateFilter.startTime = dateFilter.endTime = null
    priceFilter.bottomPrice = 0
    priceFilter.topPrice = 588
    this.setData({
      fieldFilter,
      formFilter,
      dateFilter,
      priceFilter,
    })
  },

  /** 完成活动筛选 */
  saveFilter() {
    this.data.filterBackup = {}
    this.setData({
      filterVisible: false
    })
    this.refreshActivities()
  },

  /** 获取活动列表（分页） */
  getActivities() {
    const { pageIndex, sortType } = this.data
    const fields = this.data.fieldFilter.filter(item => item.selected).map(item => item.value)
    const forms = this.data.formFilter.filter(item => item.selected).map(item => item.value)
    const { startTime, endTime } = this.data.dateFilter
    const { bottomPrice, topPrice } = this.data.priceFilter
    this.setData({
      loading: true
    })
    fetchActivities({ pageIndex, sortType, fields, forms, startTime, endTime, bottomPrice, topPrice }).then(({ data }) => {
      if (data.length > 0)
        this.data.pageIndex++
      this.setData({ activities: [...this.data.activities, ...data] })
    }).finally(() => {
      this.setData({ loading: false })
    })
  },

  /** 刷新活动列表 */
  refreshActivities() {
    this.setData({
      activities: [],
      loading: true
    })
    this.data.pageIndex = 1
    this.getActivities()
  },
})