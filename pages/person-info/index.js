
const mockOccupation = require('../../mock/occupations.js')
import Toast from 'tdesign-miniprogram/toast/index';

const innerPhoneReg = '^1(?:3\\d|4[4-9]|5[0-35-9]|6[67]|7[0-8]|8\\d|9\\d)\\d{8}$';
const innerNameReg = '^[\u4e00-\u9fa5]{2,50}$'
const innerIDCardReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
Page({


  data: {
      dateVisible:false,
      isDefault:false,
      OccupationVisible:false,
      date: new Date('2021-12-23').getTime(),
      Occupations:'',
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',

      name:'',
      birthday:'',
      phone:'',
      IDCard:'',
      Email:'',
      occupation:'',
  },
  onLoad(options){
    this.setData({
      Occupations:mockOccupation['api/occupations'].data.Occupations
    })
  },
  showPicker(e) {
    this.setData({
      dateVisible: true,
    });
  },
  hidePicker() {
    this.setData({
      dateVisible: false,
    });
  },
  onColumnChange(e) {
    var my_birthday = e.detail.value.$y+'年'+e.detail.value.$H+"月"+e.detail.value.$D+'日';
    this.setData({
        birthday:my_birthday
      });
    this.hidePicker();
  },
  onOccupationPicker(e){
    this.setData({
      OccupationVisible: true,
    });
    console.log(this.data.OccupationVisible)
  },
  onOccupationConfirm(e) {
    console.log(e);
    this.setData({
      occupation:e.detail.value[0].value
    });
    this.onOccupationCancel()
  },
  onOccupationCancel(e) {
    this.setData({
      OccupationVisible: false,
    });
  },
  onInputValue(e){
    console.log(e)
    const { item } = e.currentTarget.dataset;
    const { value = '' } = e.detail;
    this.setData(
      {
        [`${item}`]: value,
      })
  },
  onVerifyInputLegel(){
    const {name,birthday,phone,IDCard} = this.data;
    const prefixNameReg = String(this.properties.nameReg || innerNameReg);
    const prefixPhoneReg = String(this.properties.phoneReg || innerPhoneReg);
    const nameRegExp = new RegExp(prefixNameReg)
    const phoneRegExp = new RegExp(prefixPhoneReg);

    if(!name||!name.trim())
    return {
      isLegel:false,
      tips:'请填写您的姓名',
    }
    if(name.trim().length<2||name.trim().length>50)
    {
      return {
        isLegel:false,
        tips:"姓名长度需要在2~50字之间",
      }
    }
    if(!nameRegExp.test(name))
    {
      return {
        isLegel:false,
        tips:'姓名只能包括汉字',
      }
    }
    if(!birthday)
    {
      return {
        isLegel:false,
        tips:'请填写您的生日',
      }
    }
    if(!phone||!phone.trim())
    {
      return {
        isLegel:false,
        tips:'请填写您的手机号',
      }
    }
    if (!phoneRegExp.test(phone)) 
    {
      return {
        isLegal:false,
        tips: '请填写正确的手机号',
      };
    }
    if(!innerIDCardReg.test(IDCard))
    {
      return {
        isLegel:false,
        tips:'请填写正确的身份证号码',
      }
    }
    return {
      isLegel:true,
      tips:'添加成功',
    }
  },
  submit(e){
    const {tips} = this.onVerifyInputLegel();
      Toast({
        context: this,
        selector: '#t-toast',
        message: tips,
        icon: '',
        duration: 1000,
      });
    if(tips!='添加成功')
      return;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      　 addPerson:{
          name:this.data.name,
          birthday:this.data.birthday,
          phone:this.data.phone,
          IDCard:this.data.IDCard,
          Email:this.data.Email,
          occupation:this.data.occupation,
      }
      })　　
    wx.navigateBack({
      delta:1
    })
    
  }
})