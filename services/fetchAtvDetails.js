/** 模拟获取活动详情页的方法 */
import { config } from '../config/index';
import delay from './delay';

const guestList = [
  '/src/imgs/activity/poster.png',
  '/src/imgs/activity/poster.png',
  '/src/imgs/activity/poster.png',
  '/src/imgs/activity/poster.png',
  '/src/imgs/activity/poster.png',
  '/src/imgs/activity/poster.png'
];
const venueList = [
  '/src/imgs/activity/detail.png',
  '/src/imgs/activity/detail.png',
  '/src/imgs/activity/detail.png',
  '/src/imgs/activity/detail.png',
  '/src/imgs/activity/detail.png'
];
const profiles = [
  'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
  'https://tdesign.gtimg.com/miniprogram/images/avatar2.png',
  'https://tdesign.gtimg.com/miniprogram/images/avatar3.png',
  'https://tdesign.gtimg.com/miniprogram/images/avatar4.png',
  'https://tdesign.gtimg.com/miniprogram/images/avatar5.png',
  'https://tdesign.gtimg.com/miniprogram/images/avatar1.png'
];
const priceRange = '￥88-￥228';
const popupVisible = false;
const atvTitle = '2021 SICC服务设计创新大会';
const date = '2021年3月16日';
const location = '深圳市腾讯滨海大厦';
const score = 4.5;
const comments = [
  {
    user: '小小轩',
    profile: 'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
    comment: '我已经是第三次参加SICC大会了，作为一名服务体验设计行业的从业者，每次参与都受益匪浅。所以在这次的活动，我也十分期待。'
  },
  {
    user: '小小宇',
    profile: 'https://tdesign.gtimg.com/miniprogram/images/avatar4.png',
    comment: 'SICC大会让我深受启发。这个盛会聚集了世界各地最杰出的服务设计专家和创新者，他们的演讲和分享充满了洞见和创意。我对如何将服务设计应用于解决现实世界问题有了更深刻的理解。'
  },
  {
    user: '小小幺',
    profile: 'https://tdesign.gtimg.com/miniprogram/images/avatar3.png',
    comment: '这次大会为我打开了新的思路。我对可持续性和用户体验设计有了更深刻的理解。大会的演讲者们提出的创意方法和案例研究都令人印象深刻，我相信这将对未来的工作产生积极影响。'
  }
];
const introduction = '在数字化时代背景下，如何抓住机遇，构建“数字”+“文化”更高效、宽领域、深覆盖的新时代文化创新之路，让优秀传统文化得以延续和新生，被更多人认可和接受，也是我们服务设计探索的方向。2021年5月16日，由腾讯用户研究与体验设计部（简称CDC）主办的第三届服务创新大会，将在深圳腾讯滨海大厦召开。近年来数字化正在赋能传统文化的传承和传播，而传统文化也同样在启发新的服务设计理念和思路，两者之间的界限越来越模糊，相互融合。本次大会将围绕文化保育和文化创新，邀请7位传统文物、建筑、服饰、工艺等不同艺术领域的行业专家，为我们分享最新发展趋势和实践经验，开拓来宾在传统文化与数字科技间的碰撞思路，探索新的服务设计课题，让我们先睹为快，了解这些专家们将会分享哪些主题。';

// mock活动基本信息
function mockFetchAtvDetails(){
  return delay().then(() => {
    return {
      guestList,
      venueList,
      profiles,
      priceRange,
      atvTitle,
      date,
      location,
      score,
      comments,
      introduction
    }
  })
}

// 获取活动基本信息
export function fetchAtvDetails() {
  if (config.useMock) {
    return mockFetchAtvDetails();
  } else {
    return new Promise((resolve) => {
      resolve('real api')
    })
  }
};