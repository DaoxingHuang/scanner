// pages/word-editor/index.js

import { copyText } from '../../utils/common';

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    item:{},
    rate:1,
    height:240,
    rects:[],
    top:app.globalData.screenWidth/2+100,
    defaultH:app.globalData.screenWidth/2+90,
    longText:''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const that = this;
     const eventChannel = this.getOpenerEventChannel();
     eventChannel.on('acceptDataFromOpenerPage', function(data) {
      const item = data.data;
      that.setData({item});
      console.log("eventChannel:",item);
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log("item:",this.data.item);
  },

  onTabbarChange(e){
    if(e.detail === "copy"){
      copyText(this.data.longText);
    }
  },
  reacClick(e){
    console.log("reacClick:");
  },
  bindchange(event){
    this.setData({top:event.detail.y+10});
    // event.detail = {x, y, source}
  },
  bindTextAreaBlur: function(e) {
    this.setData({
      longText:e.detail.value
    }) 
  }, 
  onImgLoad(e){
    console.log("img:",e);
    console.log('rects:');
    // detail: {width: 926, height: 816}
    const screenWidth = app.globalData.screenWidth;
    const actualWidth = e.detail.width;
    const actualHeight = e.detail.height;

    console.log("screenWidth:",screenWidth," actualWidth:",actualWidth);
    const rate = (actualWidth/screenWidth).toFixed(3);
    console.log("screenWidth:",screenWidth," actualWidth:",actualWidth," rate:",rate);
    const rego = this.data.item.rego;
    const words_result = rego.words_result|| [];
    const words = [];
    const rects = words_result.map(item=>{
    const location = item.location;
    words.push(`${item.words.trim()}`);
    return {height:location.height/rate,left:location.left/rate,top:location.top/rate,width:location.width/rate}
    });
    console.log('rects:',rects);
    const longText = words.join('\n');
    this.setData({rate,height:actualHeight/rate,rects,longText});
  },

  // copyText: function () {
  //   wx.setClipboardData({
  //     data: this.data.longText,
  //     success: function (res) {
  //       wx.getClipboardData({
  //         success: function (res) {
  //           wx.showToast({
  //             title: '复制成功'
  //           })
  //         }
  //       })
  //     }
  //   })
  // },

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
    return this.data.longText;
  }
})