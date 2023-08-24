// pages/OrderConfirmation/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value:[0,1],
    title:'2021 SICC服务设计创新大会',
    date:'2021年3月6日',
    address:'深圳市腾讯滨海大厦',
    current_name:[],
    current_time:[],
    current_ticket:[],
    all_price:0,
    member_message:[{
      id:0,
      name:'蔡宣轩',
    },{
      id:1,
      name:'蔡晓萱'
    }],
    ticket_time:[{
      time:'2021年3月16日',
    }
    ],
    ticket_price:[{
      project:'早鸟价-单人票',
      now_price:88,
      before_price:'128'
    },
    {
      project:'早鸟价-双人票',
      now_price:168,
      before_price:228
    },
    {
      project:'正价-单人票',
      now_price:128,
      before_price:''
    },
    {
      project:'正价-双人票',
      now_price:228,
      before_price:''
    }
    ]
  },

  computed:{
  },
  memberChange(e){
    this.setData({ current_name: e.detail.value });
  },
  timeChange(e){
    this.setData({current_time:e.detail.value});
  },
  ticketChange(e) {
      this.setData({ current_ticket: e.detail.value });
      this.getPrice();
  },
  getPrice(){
    console.log()
    let price =  this.data.ticket_price.find((item,index)=>{
      return index === this.data.current_ticket[0];
    })
    this.setData({all_price:price.now_price})
  }
})