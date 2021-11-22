Page({
  data:{
    active:1,
    colors:["12","3","4"],
    checked:true,
    images:[],
    curSrc:'',
    showFileSelect:false,
    selectActions: [
      { name: '拍照',type:"device",sizeType:['original', 'compressed'],sourceType:['camera']},
      { name: '从相册中选择',type:"device", sizeType:['original', 'compressed'],sourceType:['album']},
      { name: '导入联系人图片',type:"message"},
    ],
  },
  onLoad() {
    this.ctx = wx.createCameraContext()
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
    wx.navigateTo({
      url: '/pages/image-list/index?images='+ JSON.stringify(this.data.images),
    });
  },

  takePhoto() {
    console.log("takePhoto");
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
       const clone = Array.from(this.data.images);
       const url = res.tempImagePath;
       this.setImageList(url);
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
    // sizeType=['original', 'compressed'],sourceType=['camera']
    // const action = detail.action();

    detail.type === "device" && this.chooseImage(detail.sizeType, detail.sourceType);
    detail.type === "message" && this.chooseMessageFile(detail.sizeType, detail.sourceType);

    console.log("selectFileAction:",detail);

  },
   
  chooseMessageFile:function(e){
    wx.chooseMessageFile({
      count: 1,
      type: 'image',
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        this.setImageList(res.tempFiles[0]);

        // wx.redirectTo({
        //   url: '/pages/cropper/cropper?url='+ res.tempFiles[0],
        // });
        // const tempFilePaths = res.tempFiles
      }
    })
  },


  chooseImage:function(sizeType=['original', 'compressed'],sourceType=['album', 'camera']){
    wx.chooseImage({
      count: 1,
      sizeType,  //可选择原图或压缩后的图片
      sourceType, //可选择性开放访问相册、相机
      success: res => {
        this.setImageList(res.tempFilePaths[0]);
        // "pages/cropper/cropper"
        // wx.redirectTo({
        //   url: '/pages/cropper/cropper?url='+ res.tempFilePaths[0],
        // })
        // // ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
        // // ctx.draw();
        // // wx.redirectTo({
        // //   url: '/pages/goods/list?name=' + keywords,
        // // })
        console.log(res);
      }
    });
  },

  onTabBarChange:function(e){
    this.setData({active:e.detail})
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