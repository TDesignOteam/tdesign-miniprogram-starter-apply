// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    //个人信息栏  
    username:"蔡宣轩",
    userwork:"设计/艺术从业者",
    userage:"29",
    image: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    //tab选项卡
    tabPanelstyle: 'display:flex;justify-content:center;align-items:center;',
  },
  // 图标tap事件
  onIconTap(){},
  /**
   * tab选项卡
   */ 
  onTabsChange(event) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  }, 
  
  onStickyScroll(event) {
    console.log(event.detail);
  },  
})
