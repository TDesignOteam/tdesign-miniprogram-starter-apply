import { delay } from './delay'

/** 获取当前所在城市 */
export function fetchCurrentCity() {
  return delay(2000).then(() => ({ code: 200, data: '深圳' }))
}