// index.js
const app = getApp();
import {
  fetchSwiperLis,
  fetchAtvsList
} from '../../services/fetchAtvsList';

const domain = ['IT互联网', '艺术设计', '科技', '电商', '教育', '医疗健康', '心理学', '摄影'];
const form = ['讲座', '展览', '工作坊'];

Page({
  data: {
    // 导航栏高度
    navBarHeight: app.globalData.navBarHeight,

    // 轮播图
    current: 0,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList: [],
    atvsList: [],

    // 当前活动分类
    selectedColTitle: 1,

    // 筛选弹窗
    popupVisible: false,
    choosingDate: false,
    domain,
    form,
    priceMax: 588,
    priceDefault: [0, 288],
    reset: false,
    // 用户选择的筛选条件
    tags: [],
    dateRange: [],
    startTime: '',
    endTime: '',
    priceRange: []
  },

  // 转换标题的事件
  selectColTitile(e) {
    this.setData({
      selectedColTitle: parseInt(e.currentTarget.dataset.index)
    });
  },

  // 加载页面数据
  async loadData() {
    // 加载活动的信息
    const swiper = await fetchSwiperLis();
    const atvsList = await fetchAtvsList();
    this.setData({
      swiperList: swiper.data,
      atvsList: atvsList.data
    })

    // 将价格范围设置为初始范围
    this.setData({
      priceRange: this.data.priceDefault
    });

    // 加载今明两日的日期
    this.loadDate();
  },

  // 开关筛选弹窗
  handlePopup() {
    let newStatus = !this.data.popupVisible;
    this.setData({
      popupVisible: newStatus,
      choosingDate: false
    })
  },

  // 选择标签
  chooseTag({
    detail
  }) {
    if (detail.chosen) {
      this.data.tags.push(detail.tag)
    } else {
      this.data.tags.forEach((item, idx) => {
        if (item == detail.tag)
          this.data.tags.splice(idx, 1);
      })
    };
  },

  // 加载今日的日期
  loadDate() {
    let date = new Date();
    let year = date.getUTCFullYear(),
      month = date.getUTCMonth() + 1,
      day = date.getUTCDate();
    this.setData({
      startTime: year + '年' + month + '月' + day + '日',
      endTime: month + '月' + (day + 1) + '日'
    });
    this.data.dateRange.push(this.data.startTime, this.data.endTime)
  },

  // 进入选择日期
  chooseDate() {
    let newStatus = !this.data.choosingDate;
    this.setData({
      choosingDate: newStatus
    });
  },

  // 在日历中选择日期
  handleSelect(e) {
    let {
      value
    } = e.detail;
    this.data.dateRange = [];

    if (value.length > 1) {
      value.forEach((time) => {
        let date = new Date(time);
        let year = date.getUTCFullYear(),
          month = date.getUTCMonth() + 1,
          day = date.getUTCDate() + 1;

        this.data.dateRange.push(year + '年' + month + '月' + day + '日');
      });
    };
  },

  // 确认提交选择的日期
  comfirmDate() {
    let start = this.data.dateRange[0],
      end = this.data.dateRange[1];
    if (start && end) {
      if (start.slice(0, 4) == end.slice(0, 4)) {
        this.setData({
          startTime: start,
          endTime: end.slice(5)
        })
      } else {
        this.setData({
          startTime: start,
          endTime: end
        })
      };
    }
    this.chooseDate();
  },

  // 选择价格范围
  choosePrice(e) {
    this.setData({
      priceRange: e.detail.value
    })
  },

  // 完成筛选
  submit() {
    let filter = {
      tags: this.data.tags,
      dateRange: this.data.dateRange,
      priceRange: this.data.priceDefault
    };
    console.log(filter);
    this.handlePopup();
  },

  // 重置筛选条件
  reset() {
    this.setData({
      tags: [],
      dateRange: [],
      priceRange: this.data.priceDefault,
      reset: true
    });
    this.loadDate();
  },

  // 完成重置，将reset值改回原来的假值
  finshReset() {
    this.setData({
      reset: false
    })
  },

  onLoad() {
    this.loadData();
  }
})