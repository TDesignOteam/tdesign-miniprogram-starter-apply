/** 模拟获取我的页面的数据 */
import {
  config
} from '../config/index';
import delay from './delay';

const myAtvs = [{
    imgUrl: '/src/imgs/my/atv2.png',
    name: '2021 SICC服务设计创新大会',
    date: '2021年3月16日',
    status: 0
  },
  {
    imgUrl: '/src/imgs/my/atv3.png',
    name: '少年与星空 插画巡展',
    date: '2021年6月5日',
    status: 1
  },
  {
    imgUrl: '/src/imgs/my/atv1.png',
    name: '2019 SICC服务设计创新大会',
    date: '2019年3月16日',
    status: 1
  },
  {
    imgUrl: '/src/imgs/my/atv4.png',
    name: 'Universe AI艺术展',
    date: '2019年3月16日',
    status: 1
  }
];

function mockFetchMyatvs() {
  return delay().then(() => {
    return {
      data: myAtvs
    };
  })
};

export function fetchMyatvs() {
  if (config.useMock) {
    return mockFetchMyatvs();
  } else {
    return new Promise((resolve) => {
      resolve('real api')
    });
  }
}