const WXAPI = require('apifm-wxapi')
const TOOLS = require('../../utils/tools.js')
const AUTH = require('../../utils/auth')
const APP = getApp()

Page({
  data: {
    showFileSelect:false,
    selectActions: [
      { name: '拍照',type:"device",sizeType:['original', 'compressed'],sourceType:['camera']},
      { name: '从相册中选择',type:"device", sizeType:['original', 'compressed'],sourceType:['album']},
      { name: '导入联系人图片',type:"message"},
    ],
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
        const tempFilePaths = res.tempFiles
      }
    })
  },

  chooseImage:function(sizeType=['original', 'compressed'],sourceType=['album', 'camera']){
    wx.chooseImage({
      count: 1,
      sizeType,  //可选择原图或压缩后的图片
      sourceType, //可选择性开放访问相册、相机
      success: res => {

        // "pages/cropper/cropper"
        wx.redirectTo({
          url: '/pages/cropper/cropper?url='+ res.tempFilePaths[0],
        })
        // // ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
        // // ctx.draw();
        // // wx.redirectTo({
        // //   url: '/pages/goods/list?name=' + keywords,
        // // })
        console.log(res);
      }
    });
  },
  tabClick: function(e) {
    const category = this.data.categories.find(ele => {
      return ele.id == e.currentTarget.dataset.id
    })
    if (category.vopCid1 || category.vopCid2) {
      wx.navigateTo({
        url: '/pages/goods/list-vop?cid1=' + (category.vopCid1 ? category.vopCid1 : '') + '&cid2=' + (category.vopCid2 ? category.vopCid2 : ''),
      })
    } else {
      wx.setStorageSync("_categoryId", category.id)
      wx.switchTab({
        url: '/pages/category/category',
      })
    }
  },

  toDetailsTap: function(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id
    const supplytype = e.currentTarget.dataset.supplytype
    const yyId = e.currentTarget.dataset.yyid
    if (supplytype == 'cps_jd') {
      wx.navigateTo({
        url: `/packageCps/pages/goods-details/cps-jd?id=${id}`,
      })
    } else if (supplytype == 'vop_jd') {
      wx.navigateTo({
        url: `/pages/goods-details/vop?id=${yyId}&goodsId=${id}`,
      })
    } else if (supplytype == 'cps_pdd') {
      wx.navigateTo({
        url: `/packageCps/pages/goods-details/cps-pdd?id=${id}`,
      })
    } else if (supplytype == 'cps_taobao') {
      wx.navigateTo({
        url: `/packageCps/pages/goods-details/cps-taobao?id=${id}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/goods-details/index?id=${id}`,
      })
    }
  },
  tapBanner: function(e) {
    const url = e.currentTarget.dataset.url
    if (url) {
      wx.navigateTo({
        url
      })
    }
  },
  adClick: function(e) {
    const url = e.currentTarget.dataset.url
    if (url) {
      wx.navigateTo({
        url
      })
    }
  },
  bindTypeTap: function(e) {
    this.setData({
      selectCurrent: e.index
    })
  },
  onLoad: function(e) {
    console.log("index-onLoad:",e)
    wx.showShareMenu({
      withShareTicket: true,
    })
    const that = this
    // 读取分享链接中的邀请人编号
    if (e && e.inviter_id) {
      wx.setStorageSync('referrer', e.inviter_id)
    }
    // 读取小程序码中的邀请人编号
    if (e && e.scene) {
      const scene = decodeURIComponent(e.scene)
      if (scene) {        
        wx.setStorageSync('referrer', scene.substring(11))
      }
    }
    // 静默式授权注册/登陆
    AUTH.checkHasLogined().then(isLogined => {
      if (!isLogined) {
        AUTH.authorize().then( aaa => {
          AUTH.bindSeller()
          TOOLS.showTabBarBadge()
        })
      } else {
        AUTH.bindSeller()
        TOOLS.showTabBarBadge()
      }
    })
    // this.initBanners()
    // this.categories()

    // that.getCoupons()
    // that.getNotice()
    // that.kanjiaGoods()
    // that.pingtuanGoods()
    // this.wxaMpLiveRooms()
    // this.adPosition()
    // // 读取系统参数
    // this.readConfigVal()
    // getApp().configLoadOK = () => {
    //   this.readConfigVal()
    // }
  },
  readConfigVal() {
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
    this.setData({
      mallName:wx.getStorageSync('mallName')?wx.getStorageSync('mallName'):'',
      show_buy_dynamic: wx.getStorageSync('show_buy_dynamic')
    })
  },
  async miaoshaGoods(){
    const res = await WXAPI.goods({
      miaosha: true
    })
    if (res.code == 0) {
      res.data.forEach(ele => {
        const _now = new Date().getTime()
        if (ele.dateStart) {
          ele.dateStartInt = new Date(ele.dateStart.replace(/-/g, '/')).getTime() - _now
        }
        if (ele.dateEnd) {
          ele.dateEndInt = new Date(ele.dateEnd.replace(/-/g, '/')).getTime() -_now
        }
      })
      this.setData({
        miaoshaGoods: res.data
      })
    }
  },
  async wxaMpLiveRooms(){
    const res = await WXAPI.wxaMpLiveRooms()
    if (res.code == 0 && res.data.length > 0) {
      this.setData({
        aliveRooms: res.data
      })
    }
  },
  async initBanners(){
    const _data = {}
    // 读取头部轮播图
    const res1 = await WXAPI.banners({
      type: 'index'
    })
    if (res1.code == 700) {
      wx.showModal({
        title: '提示',
        content: '请在后台添加 banner 轮播图片，自定义类型填写 index',
        showCancel: false
      })
    } else {
      _data.banners = res1.data
    }
    this.setData(_data)
  },
  onShow: function(e){
    console.log("App.globalData.navHeight", APP.globalData.navHeight)
    console.log("App.globalData.navTop", APP.globalData.navTop)
    console.log("App.globalData.windowHeight", APP.globalData.windowHeight)
    this.setData({
      navHeight: APP.globalData.navHeight,
      navTop: APP.globalData.navTop,
      windowHeight: APP.globalData.windowHeight,
      menuButtonObject: APP.globalData.menuButtonObject //小程序胶囊信息
    })
    this.setData({
      shopInfo: wx.getStorageSync('shopInfo')
    })
    // 获取购物车数据，显示TabBarBadge
    TOOLS.showTabBarBadge()
    this.goodsDynamic()
    this.miaoshaGoods()
  },
  async goodsDynamic(){
    const res = await WXAPI.goodsDynamic(0)
    if (res.code == 0) {
      this.setData({
        goodsDynamic: res.data
      })
    }
  },
  async categories(){
    const res = await WXAPI.goodsCategory()
    let categories = [];
    if (res.code == 0) {
      const _categories = res.data.filter(ele => {
        return ele.level == 1
      })
      categories = categories.concat(_categories)
    }
    this.setData({
      categories: categories,
      activeCategoryId: 0,
      curPage: 1
    });
    this.getGoodsList(0);
  },

})