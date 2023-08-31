// pages/city-picker/index.js
import { fetchCurrentCity } from '../../services/location'
const app = getApp()

const cities = [
  { index: '热门城市', children: ['北京', '上海', '广州', '深圳', '成都'] },
  { index: 'A', children: ['阿克苏', '安康', '安宁', '安庆', '鞍山', '安顺', '安阳', '阿拉善左旗', '阿拉善右旗', '阿拉尔', '阿勒泰', '阿里', '阿坝', '阿尔山'] }, 
  { index: 'B', children: ['北京', '保定', '包头', '巴彦淖尔', '本溪', '白城', '白山', '蚌埠', '亳州', '滨州', '北海', '百色', '巴中', '毕节', '保山', '宝鸡', '白银', '博尔塔拉', '巴音郭楞'] }, 
  { index: 'C', children: ['重庆', '成都', '长沙', '长春', '常州', '沧州', '承德', '赤峰', '朝阳', '长治', '常德', '郴州', '潮州', '池州', '滁州', '巢湖', '昌吉'] }, 
  { index: 'D', children: ['大连','大庆','大同','丹东','东莞','东营','德阳','德州','定西','达州','大理','德宏','迪庆','儋州'] }, 
  { index: 'E', children: ['鄂尔多斯', '鄂州', '恩施'] }, 
  { index: 'F', children: ['福州', '佛山', '抚顺', '阜新', '阜阳', '抚州', '防城港', '富阳'] }, 
  { index: 'G', children: ['广州', '贵阳', '桂林', '赣州', '广元', '广安', '甘孜', '甘南', '固原', '果洛'] }, 
  { index: 'H', children: ['杭州', '哈尔滨', '合肥', '呼和浩特', '海口', '邯郸', '衡水', '呼伦贝尔', '葫芦岛', '鹤岗', '黑河', '淮安', '杭州湾新区', '湖州', '淮南', '淮北','黄山','菏泽','鹤壁','黄石','黄冈','衡阳','怀化','惠州','河源','汉中','海东','海北','黄南','海南藏族自治州','海西','哈密'] }, 
  { index: 'J', children: ['济南','济宁','嘉兴','金华','九江','吉林','锦州','晋中','晋城','焦作','荆门','荆州','揭阳','江门','佳木斯', '鸡西','吉安','景德镇','济源'] }, 
  { index: 'K', children: ['昆明','开封','克拉玛依','喀什地区'] }, 
  { index: 'L', children: ['兰州','洛阳','廊坊','临沂','连云港','柳州','泸州','乐山', '凉山彝族自治州'] }, 
  { index: 'M', children: ['绵阳','马鞍山','牡丹江','茂名','梅州','眉山','绵竹'] }, 
  { index: 'N', children: ['南京','南昌','宁波','南宁','南通','南充','南阳','内江', '宁德','怒江傈僳族自治州'] }, 
  { index: 'P', children: ['平顶山','莆田','萍乡','攀枝花','盘锦','平凉'] }, 
  { index: 'Q', children: ['青岛','泉州','秦皇岛','齐齐哈尔','衢州','清远', '钦州','黔西南布依族苗族自治州','黔东南苗族侗族自治州', '黔南布依族苗族自治州'] }, 
  { index: 'R', children: ['日照'] }, 
  { index: 'S', children: ['上海','深圳','沈阳','石家庄','苏州','三亚', '绍兴','汕头','汕尾','商丘','十堰','随州', '邵阳', '三明', '松原', '四平', '朔州', '双鸭山', '韶关', '石嘴山', '石河子', '石柱土家族自治县'] }, 
  { index: 'T', children: ['天津', '太原', '唐山', '台州', '泰安', '泰州', '铜陵', '铜仁', '通辽', '通化', '天水', '铁岭', '吐鲁番'] }, 
  { index: 'W', children: ['武汉', '无锡', '温州', '芜湖', '潍坊', '威海', '乌鲁木齐', '乌海', '乌兰察布', '武威'] }, 
  { index: 'X', children: ['西安', '厦门', '徐州', '西宁', '新乡', '许昌', '信阳', '襄阳', '孝感', '咸宁', '湘潭', '邢台', '忻州', '兴安盟', '锡林郭勒盟'] }, 
  { index: 'Y', children: ['烟台', '扬州', '盐城', '宜春', '宜昌', '银川', '运城', '延边朝鲜族自治州', '延安', '营口', '玉林', '玉溪', '岳阳', '永州', '榆林', '阳江', '云浮', '伊春'] },
  { index: 'Z', children: ['郑州', '珠海', '中山', '淄博', '株洲', '漳州', '镇江', '湛江', '肇庆', '遵义', '张家口', '周口', '驻马店', '张家界', '自贡', '资阳'] } 
]

Page({
  /** 页面的初始数据 */
  data: {
    cities: [],           // 城市列表
    indexList: [],        // 城市索引（拼音首字母）
    selectedCity: null,   // 当前选择的城市
    currentCity: null,    // 当前所在的城市
    loading: true,        // 是否正在获取当前所在城市
  },

  /** 生命周期函数--监听页面加载 */
  onLoad(options) {
    this.getCurrentCity()
    this.setData({
      cities,
      indexList: cities.filter((item, index) => index !== 0).map(item => item.index),
      selectedCity: app.globalData.city
    })
  },

  /** 获取当前所在城市 */
  getCurrentCity() {
    this.setData({ loading: true })
    fetchCurrentCity().then(({ data }) => {
      this.setData({ currentCity: data })
    }).finally(() => {
      this.setData({ loading: false })
    })
  },

  /** 选择城市 */
  selectCity(event) {
    const city = event.currentTarget.dataset.city
    if (!city)
      return
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('selectCity', city)
    wx.navigateBack()
  }
})