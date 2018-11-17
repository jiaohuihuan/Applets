// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 开放在外部的数据，需要改变的
    // 可在外部修改
    like:{
      type: Boolean
    },
    count:{
      type:Number
    }
  },



  /**
   * 组件的初始数据
   */
  data: {
    // 封装在内部的数据
    // data是私有属性，不能修改
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },



  /**
   * 组件的方法列表
   */
  methods: { 
    onLike:function(event){
      // 自定义事件
      let like = this.properties.like;
      let count = this.properties.count;
      
      // 判断状态，like原为不喜欢
      // 这里count算法：由原来喜欢点击后变为不喜欢-1，则反
      count = like?count-1:count+1;
      this.setData({
        count:count,
        like:!like
      })
      // 激活一个事件（点赞或取消点赞）
      let behavior = this.properties.like?'like':'cancel';
      this.triggerEvent('like',{
        behavior:behavior
      },{});
    }
  }
})
