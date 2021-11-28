// pages/reco-result/index.js
import { copyText } from '../../utils/common';

Page({

  /**
   * Page initial data
   */
  data: {
    formsResult:{},
    trs:[],
    span:50,
    result:[],
    txts:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data.url = options.url;
    const that = this;
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
     const item = data.data;
     that.setData({formsResult:item.forms_result});
     console.log("eventChannel:",item.forms_result);
     that.genTableData(item.forms_result)
   });
  },

  genTableData(formsResult){
    console.log("genTableData:",formsResult);
    const totalRet = [];
    let max = 0;
    formsResult.forEach(item=>{
      const header = item.header||[];
      const body = item.body||[];
      const footer = item.footer||[];
      
      // real headers
      const realHeaders = header.filter(item=>item.probability>0.5);
      const realHeadersRet = this.getContructorRect(realHeaders);
      const fakeHeaders = header.filter(item=>item.probability<0.5);
      const fakeHeadersRet = this.getContructorRect(fakeHeaders);
      console.log("realHeadersRet:",realHeadersRet);
      console.log("fakeHeadersRet:",fakeHeadersRet);

      const bodyCollect = this.getContructorRect(body);
      console.log("bodyCollect:",bodyCollect);

      const footerCollect = this.getContructorRect(footer);
      console.log("footerCollect:",footerCollect);
      max = Math.max(max, realHeadersRet.max);
      max = Math.max(max, fakeHeadersRet.max);
      max = Math.max(max, bodyCollect.max);
      max = Math.max(max, footerCollect.max);
      totalRet.push({realHeadersRet:realHeadersRet.ret,fakeHeadersRet:fakeHeadersRet.ret,
        bodyCollect:bodyCollect.ret,footerCollect:footerCollect.ret});
    });
    this.setData({result:totalRet});
  },

  onTabbarChange(e){
    console.log(this.data.txts)
    if(e.detail === "copy"){
      console.log("this.data.txts.join(''):",this.data.txts.join(''))
      copyText(this.data.txts.join(''));
    }
  },

  getContructorRect(data=[]){
    const realTr = [];
    let max =0;
    data.forEach(head => {
      const row = head.row;
      const col = head.column;
      if(!realTr[row]){
        realTr[row]=[];
      }
      realTr[row][col]=head;
      console.log("head.words:",head.words)
      head.words&&this.data.txts.push(head.words);
      max = Math.max(max, realTr[row].length);
    });
    return {ret:realTr,max}
  },
   
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

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
    return {
      title: '表格解析结果',
      path:'/pages/reco-single/index',
      imageUrl: this.data.url,
    }
  }
})