import { delay } from './delay'

/** 获取购买结果 */
export function fetchPurchase(purchaseId) {
  const mockData = {
    purchaseId,
    activity: {
      activityId: 1,
      image: '/images/mock/purchase/activity.png',
      name: '2021 SICC服务设计创新大会',
      time: 1615867200000,
      location: '深圳市腾讯滨海大厦'
    },
    attendees: [
      {
        name: '蔡宣轩',
        avatar: '/images/mock/purchase/avatar.png',
        age: 29,
        job: '设计师/艺术从业者'
      }
    ]
  }
  return delay().then(() => ({ code: 200, data: mockData }))
}