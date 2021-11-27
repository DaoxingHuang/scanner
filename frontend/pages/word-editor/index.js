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
    defaultH:app.globalData.screenWidth/2+70,
    longText:'',
    selectAll:true,
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
    console.log(333);
    if(e.detail === "copy"){
      copyText(this.data.longText);
    }
    else if(e.detail === "selectAll"){
      console.log("this.data.selectAll:",this.data.selectAll);
      this.data.rects.forEach(item=>item.select=!this.data.selectAll);
      const words = (this.data.rects||[]).filter(item=>item.select).map(item=>item.word);
      const longText = words.join('\n');
      console.log("longText:",longText);
      this.editorCtx.clear();
      this.editorCtx.insertText({
        text: longText
      })
      // this.setData({rate,height:actualHeight/rate,rects,longText});
      this.setData({rects:this.data.rects,longText,selectAll:!this.data.selectAll});
    }
  },
  reacClick(e){
    // this item is clone body ,can not change it direct;
    const item = e.currentTarget.dataset.item;
    // item.select = !item.select;
    this.data.rects[item.index].select = !this.data.rects[item.index].select;
    console.log(this.data.rects);
    const selectRects = this.data.rects.filter(item=>item.select);
    const words = (selectRects||[]).map(item=>item.word);
    const longText = words.join('\n');
    this.editorCtx.clear();
    this.editorCtx.insertText({
      text: longText
    })
    // this.setData({rate,height:actualHeight/rate,rects,longText});
    this.setData({rects:this.data.rects,longText});
  },

  bindchange(event){
    this.setData({top:event.detail.y+30});
    // event.detail = {x, y, source}
  },
  bindTextAreaBlur: function(e) {
    this.setData({
      longText:e.detail.value
    }) 
  }, 

  onEditorReady() {
    console.log("onEditorReady:");
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context;
      console.log("onEditorReady:",that.data.longText);

      // this.editorCtx.insertText({
      //   text: formatDate
      // })
    }).exec()
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
    const rects = words_result.map((item,index)=>{
      const location = item.location;
      const word = item.words.trim();
      words.push(word);
      return {height:location.height/rate,left:location.left/rate,top:location.top/rate,width:location.width/rate, index, select:true ,word,}
    });
    console.log('rects:',rects);
    const longText = words.join('\n');
     this.editorCtx.insertText({
        text: longText
      })
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