// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPrefix: [
      {name:'通知',path:'/pages/notice/notice',icon:'/assets/img/index/2000.png'},
      {name:'健康上报',path:'/pages/healthy/healthy',icon:'/assets/img/index/2001.png'},
      {name:'问卷填写',path:'/pages/location/location',icon:'/assets/img/index/2002.png'},
      {name:'定位签到',path:'/pages/signInList/signInList',icon:'/assets/img/index/2003.png'},
      {name:'离校返校',icon:'/assets/img/index/2004.png'},
      {name:'活动签到',path:'/pages/activitySign/activitySign',icon:'/assets/img/index/2005.png'},    
      {name:'请假申请',path:'/pages/askForLeaveList/askForLeaveList',icon:'/assets/img/index/2006.png'},
      {name:'出入校二维码',path:'/pages/QRcode/QRcode',icon:'/assets/img/index/2007.png'},
    ] ,
    swiperList:['/assets/img/swiper/swiper-1.png','/assets/img/swiper/swiper-2.png'],
  },
  
  
  // toApplication: function () {
  //   // var id = e.currentTarget.id;
  //   wx.navigateTo({
  //     url: '../application/application'
  //   })
  // },

  

})