import { CameraActionType } from "../../utils/type";
Page({
  data:{
    active:CameraActionType.PictureKownWords.index,
    cameraActionType:CameraActionType,
    colors:["12","3","4"],
    checked:true,
    images:[],
    curSrc:'',
    showFileSelect:false,
    selectActions: [
      // { name: '拍照',type:"device",sizeType:['original', 'compressed'],sourceType:['camera']},
      { name: '从相册中选择',type:"device", sizeType:['original', 'compressed'],sourceType:['album']},
      { name: '导入联系人图片',type:"message"},
    ],
  },
  onLoad(options) {
    this.ctx = wx.createCameraContext();
    console.log("Camare:",options.active);
    this.setData({active:parseInt(options.active||1)});
  },     

  onSwitchChange(e){
    console.log(e.detail);
    const checked=e.detail;
    wx.showToast({
      title: checked?'多拍模式':'单拍模式',
      icon: 'success_no_circle',
      duration: 1000
    })
    this.setData({checked});
  },

  setImageList(url){
    const clone = Array.from(this.data.images);
    console.log("url:",url);
    clone.push(url);
    console.log("this.data.images:",this.data.images);
    this.setData({
      images: clone,
      curSrc:url
    })
  },

  goToImages(){
    const images = this.data.images;
    if(images.length<=0){
      wx.showToast({
        title: '请拍照或是选择照片',
        icon: 'success_no_circle',
        duration: 1000
      })
      return;
    };
    const that = this;
    wx.navigateTo({
      url: '/pages/image-list/index?images='+ JSON.stringify(this.data.images),
      events: {
        // https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data) {
          console.log(data)
        },
        someEvent: function(data) {
          console.log(data)
        },
        removeImage: function(data) {
          console.log(data);
          const url = data.length>0?data[data.length-1]:'';
          that.setData({images:data,curSrc:url});
        },
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: that.data.images })
      }
    });
  },

  takePhoto() {
    console.log("takePhoto");
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
      const url = res.tempImagePath;
       this.actionRun(url);     
      }
    })
  },

  showFileSelectPopup(){
    console.log("showFileSelectPopup:",this.data.showFileSelect)
    this.setData({showFileSelect:true});
  },

  closeFileSelect(){
    console.log("closeFileSelect:",this.data.showFileSelect)
    this.setData({showFileSelect:false});
  },

  selectFileAction:function(event){
    const detail=  event.detail;
    detail.type === "device" && this.chooseImage(detail.sizeType, detail.sourceType);
    detail.type === "message" && this.chooseMessageFile(detail.sizeType, detail.sourceType);
    console.log("selectFileAction:",detail);
  },
   
  chooseMessageFile:function(e){
    const that = this;
    wx.chooseMessageFile({
      count: 1,
      type: 'image',
      success (res) {
        that.actionRun(res.tempFiles[0].path);     
      }
    })
  },


  chooseImage:function(sizeType=['original', 'compressed'],sourceType=['album', 'camera']){
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType,  //可选择原图或压缩后的图片
      sourceType, //可选择性开放访问相册、相机
      success: res => {
        this.actionRun(res.tempFilePaths[0]);
      }
    });
  },

  actionRun:function(url) {
    if(this.data.active === CameraActionType.PictureKownWords.index){
      this.pictureKownWords(url);
    }
    else if(this.data.active === CameraActionType.TableKownExcel.index){
      this.tableKownExcel(url);
    }
  },

  // export const CameraActionType={
  //   TableKownExcel:{index:0,name:'表格识字'},
  //   PictureKownWords:{index:1,name:'拍图识字'},
  //   PictureToOfficeWord:{index:2,name:'拍图转word'},
  // }
  tableKownExcel:function(url){
    wx.navigateTo({
      url: '/pages/reco-single/index?url='+url,
    })
  },

  pictureKownWords:function(url){
    if(this.data.images.length>=6){
      wx.showToast({
        title: '最多6张图片'
      });
     return;
    }
    this.setImageList(url);
  },

  onTabBarChange:function(e){
    console.log(e,e.detail);
    this.setData({active:e.detail, images: [],curSrc:''});
  },
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },


  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})