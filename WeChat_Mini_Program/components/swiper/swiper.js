// components/swiper/swiper.js

Component({
    properties: {
      swiperList: {
        type: Array,
        value: []// 默认数据（可以从引用组件处的属性传入该属性值）
      }
    },
    data: {
      currentIndex: 0  // 初始高亮下标
    },
    methods: {
      /* 这里实现控制自定义轮播指示点高亮 */
      swiperChange(e) {     
        this.setData({
          currentIndex: e.detail.current
        })      
      },

    toLink: function(t) {
       var e = t.currentTarget.dataset.item;
      this.triggerEvent("toLink", e);
      }
    }
  })
