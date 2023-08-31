import { delay } from './delay'

/** 获取热门推荐活动 */
export function fetchHotActivities() {
  const mockData = [
    { activityId: 1, image: '/images/mock/activity/hot-activity.png' },
    { activityId: 2, image: '/images/mock/activity/hot-activity.png' },
    { activityId: 3, image: '/images/mock/activity/hot-activity.png' },
    { activityId: 4, image: '/images/mock/activity/hot-activity.png' },
    { activityId: 5, image: '/images/mock/activity/hot-activity.png' },
  ]
  return delay().then(() => ({ code: 200, data: mockData }))
}

/** 获取活动列表 */
export function fetchActivities({ pageIndex }) {
  const mockData = [
    {
      activityId: pageIndex * 4 - 3,
      image: '/images/mock/activity/activity-1.png',
      name: '少年与星空 插画巡展',
      rate: 4.5,
      bottomPrice: 98,
      topPrice: 118,
    },
    {
      activityId: pageIndex * 4 - 2,
      image: '/images/mock/activity/activity-2.png',
      name: 'Universe AI艺术展',
      rate: 3.5,
      bottomPrice: 128,
      topPrice: 228,
    },
    {
      activityId: pageIndex * 4 - 1,
      image: '/images/mock/activity/activity-3.png',
      name: '2021 SICC服务设计创新大会',
      rate: 4.5,
      bottomPrice: 88,
      topPrice: 228,
    },
    {
      activityId: pageIndex * 4,
      image: '/images/mock/activity/activity-4.png',
      name: '2019 SICC服务设计创新大会',
      rate: 5,
      bottomPrice: 0,
      topPrice: 0,
    },
  ]
  return delay().then(() => {
    if (pageIndex > 5)
      return { code: 200, data: [] }
    return { code: 200, data: mockData }
  })
}