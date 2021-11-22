// pages/image-list/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    images:[],
    maskImg:null,
    arrayNull: true,
    releaseText: '',
    replayMore: false,
    hidden: true,
    flag: false,
    x: 0,
    y: 0,
    tempFilePaths: [],
    disabled: true,
    elements: [],
    textHeight:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const imgs = JSON.parse(options.images||[]);
    console.log(imgs);
    this.setData({images:imgs,tempFilePaths:imgs})
  },

  goToCamera(){
    wx.redirectTo({
      url: '/pages/camera/index',
    });
  },

  longtap: function (e) {
    let maskImg = e.currentTarget.dataset.img;
    console.log(123,"longtap")
    this.setData({
      maskImg: maskImg
    })
   const detail = e.detail;
   this.setData({
     x: e.currentTarget.offsetLeft,
     y: e.currentTarget.offsetTop
   })
   this.setData({
     hidden: false,
     flag: true
   })
 },


 touchend: function (e) {
  if (!this.data.flag) {
    return;
  }
  const x = e.changedTouches[0].pageX
  const y = e.changedTouches[0].pageY
  const list = this.data.elements;
  let data = this.data.tempFilePaths
  for (var j = 0; j < list.length; j++) {
    const item = list[j];
    if (x > item.left && x < item.right && y > item.top && y < item.bottom) {
      const endIndex = item.dataset.index;
      const beginIndex = this.data.beginIndex;
      //向后移动
      if (beginIndex < endIndex) {
        let tem = data[beginIndex];
        for (let i = beginIndex; i < endIndex; i++) {
          data[i] = data[i + 1]
        }
        data[endIndex] = tem;
      }
      //向前移动
      if (beginIndex > endIndex) {
        let tem = data[beginIndex];
        for (let i = beginIndex; i > endIndex; i--) {
          data[i] = data[i - 1]
        }
        data[endIndex] = tem;
      }

      this.setData({
        tempFilePaths: data
      })
    }
  }
  this.setData({
    hidden: true,
    flag: false
  })
},

 touchs: function (e) {
  this.setData({
    beginIndex: e.currentTarget.dataset.index
  })
},


touchm: function (e) {
  // this.setData({
  //     x: x - 75,
  //     y: y - this.data.textHeight*2
  //   })
    if (this.data.flag) {
      const x = e.touches[0].pageX
      const y = e.touches[0].pageY
      if (this.data.textHeight>70){
        this.setData({
          x: x - 75,
          y: y - this.data.textHeight*2
        })
      }else{
        this.setData({
          x: x - 75,
          y: y - 140
        })
      }
    }
},

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    const that = this;
    var query = wx.createSelectorQuery();
    var nodesRef = query.selectAll(".item");
    nodesRef.fields({
      dataset: true,
      rect: true
    }, (result) => {
      console.log("result:",result);
      that.setData({
        elements: result
      })
    }).exec();
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