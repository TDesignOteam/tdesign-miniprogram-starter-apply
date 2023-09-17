/** 模拟主页的请求 */
import { config } from '../config/index';
import delay from './delay';

const swiperList = [
  '/src/imgs/home/swiper1.png',
  '/src/imgs/home/swiper2.png',
  '/src/imgs/home/swiper1.png',
  '/src/imgs/home/swiper2.png'
];
const atvsList = [{
    imgUrl: '/src/imgs/home/atv1.png',
    name: '2019 SICC服务设计创新大会',
    floorPrice: '500.00',
    ceilingPrice: '800.00',
    free: '免费活动',
    score: 5
  },
  {
    imgUrl: '/src/imgs/home/atv2.png',
    name: '2021 SICC服务设计创新大会',
    floorPrice: '3000.00',
    ceilingPrice: '4000.00',
    score: 4.5
  },
  {
    imgUrl: '/src/imgs/home/atv3.png',
    name: '少年与星空 插画巡展',
    floorPrice: '400.00',
    ceilingPrice: '500.00',
    score: 4.5
  },
  {
    imgUrl: '/src/imgs/home/atv4.png',
    name: 'Universe AI艺术展',
    floorPrice: '500.00',
    ceilingPrice: '800.00',
    score: 3.5
  },
];

// mock轮播图数据
function mockFetchSwiperList() {
  return delay().then(() => {
    return {
      data: swiperList
    }
  })
}

// mock活动列表数据
function mockFetchAtvsList(){
  return delay().then(() => {
    return {
      data: atvsList
    }
  })
}

// 获取轮播图的请求
export function fetchSwiperLis() {
  if (config.useMock) {
    return mockFetchSwiperList();
  } else {
    return new Promise((resolve) => {
      resolve('real api')
    })
  }
};

// 获取活动的请求
export function fetchAtvsList() {
  if (config.useMock) {
    return mockFetchAtvsList();
  } else {
    return new Promise((resolve) => {
      resolve('real api')
    })
  }
}