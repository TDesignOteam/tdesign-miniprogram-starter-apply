/** 模拟获取当前定位 */
import {
  locationKey
} from '../config/index';
// 使用定位服务
var QQMapWX = require("../lib/qqmap/qqmap-wx-jssdk");

// 获取定位
function fetchCity() {
  qqmapsdk.reverseGeocoder({
    success: function (res) {
      return new Promise((resolve)=>{
        resolve(res.result.ad_info.city);
      })
    },
    fail: function (error) {
      return new Promise((reject)=>{
        reject(error);
      })
    }
  })
}

// 获取当前定位的方法
export function fetchLocation() {
  if (locationKey) {
    var qqmapsdk = new QQMapWX({
      key: locationKey
    });
    fetchCity();
  } else {
    return new Promise((resolve)=>{
      resolve('Please set your key for location services.')
    })
  }
}