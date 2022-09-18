// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:['/assets/img/swiper-1.png','/assets/img/640.webp+(1).jpg'],
  },
  toApplication: function () {
    // var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../application/application'
    })
  },
  

})