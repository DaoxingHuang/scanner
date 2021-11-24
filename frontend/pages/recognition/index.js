// pages/recognition/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    all:false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const imgs = JSON.parse(options.images||[]);
    console.log(imgs);
    const handledImgs = (imgs||[]).map((item,index)=>{
      const clone = {url:item,index,status:0} // status : 0 is not handled
      return clone;
    })
    this.setData({images:handledImgs});
  },

  startRun(){
    const handledImgs = this.data.images;
    const tasks = handledImgs.map((item,index)=>{
      return new Promise((res,reject)=>{
         setTimeout(()=>{
          res(item);
         },index*3000
         )
      })
    });
    let count = 0;
    tasks.map(task=>{
      task.then(data=>{
        const index = data.index;
        const clone = Object.assign({},data,{status:1});
        const imgs = this.data.images.splice(index,1,clone);
        const newImages = this.data.images.map(item=>{
          return {...item};
        })
        this.setData({images:newImages});
        count = count+1;
      })
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    this.startRun();
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})