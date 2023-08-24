import { delay } from './delay'

/** 获取好友列表 */
export function fetchFriends() {
  const mockData = [
    { name: 'Allen', avatar: '/images/mock/friend/friend-avatar-Allen.png' },
    { name: 'Nick', avatar: '/images/mock/friend/friend-avatar-Nick.png' },
    { name: 'Jacky', avatar: '/images/mock/friend/friend-avatar-Jacky.png' },
    { name: 'Eric', avatar: '/images/mock/friend/friend-avatar-Eric.png' },
    { name: 'Johnson', avatar: '/images/mock/friend/friend-avatar-Johnson.png' },
  ]
  return delay(2000).then(() => ({ code: 200, data: mockData }))
}