// pages/activitydetail/index.js
const mockData = require('../../mock/mockData.js');
import Toast from 'tdesign-miniprogram/toast/index';


Page({
  /**
   * 页面的初始数据
   */
  data: {
    ifShowDetail:true,
    animationShowHide:{},
    screenHeight:0,
    imageProps:{
      width:"566rpx"
    },
    swiperNextMargin:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 导入初始数据
    this.setData({
      pageData:mockData['/api/detailBasic'].data,
      
    })
    // 判断感兴趣的人数
    if(this.data.pageData.interestedPeopleNum > 99){
      this.setData({
        avatarnum:99
      })
    }else{
      this.setData({
        avatarnum:this.data.pageData.interestedPeopleNum
      })
    }

    const that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          screenHeight: res.windowHeight,
          swiperNextMargin: (res.windowWidth-311)*2
        });
      }
    });
  },

  // 点击收藏按钮
  onLikeTap(){
    this.data.pageData.ifLiked = !this.data.pageData.ifLiked
    this.setData({
      pageData:this.data.pageData
    })
  },

  // 点击导航
  navigateToLocation(){
    Toast({
      context: this,
      selector: '#t-toast',
      message: '导航到'+this.data.pageData.location,
    });
  },

  // 点击分享
  onShareTap(){
    Toast({
      context: this,
      selector: '#t-toast',
      message: '分享该活动',
    });
  },

  // 点击购买
  buyTicket(){
    Toast({
      context: this,
      selector: '#t-toast',
      message: '购买活动门票',
    });
  },

  // 展示或者隐藏详细信息
  showOrHideDetail(){
    this.setData({
      ifShowDetail : !this.data.ifShowDetail
    })
    // 创建动画
    var animation = wx.createAnimation({
      duration: 400, // 动画持续时间，单位ms，默认值为0
      timingFunction: 'ease', // 动画的时间曲线，默认值为'linear'
      delay: 0, // 动画延迟时间，单位ms，默认值为0
      transformOrigin: '50% 50% 0'
    })
    var animationFlip = wx.createAnimation({
      duration: 400, // 动画持续时间，单位ms，默认值为0
      timingFunction: 'ease', // 动画的时间曲线，默认值为'linear'
      delay: 0, // 动画延迟时间，单位ms，默认值为0
      transformOrigin: '50% 50% 0'
    })
    if(!this.data.ifShowDetail){
      // console.log("下拉")
      animation.height(0).step()
      this.setData({
        animationShowHide: animation,
      });
    }else{
      // console.log("上拉")
      let _height = this.data.screenHeight - 250; // 计算新的高度值
      // console.log(_height)
      animation.height(_height).step()
      this.setData({
        animationShowHide: animation,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})