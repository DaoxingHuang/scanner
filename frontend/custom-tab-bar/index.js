// custom-tab-bar/index.js.js
// Component({
//   /**
//    * Component properties
//    */
//   properties: {

//   },

//   /**
//    * Component initial data
//    */
//   data: {

//   },

//   /**
//    * Component methods
//    */
//   methods: {

//   }
// })

const APP = getApp();

Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#666666",
    fontWeight:'bold',
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/images/nav/home-off.png",
        "selectedIconPath": "/images/nav/home-on.png",
        "text": "首页"
      },
      {
        pagePath: "/pages/bar/bless/bless",
        iconPath: "/images/nav/camera_circle_fill.svg",
        selectedIconPath: "/images/nav/camera_circle_fill.svg",
        text: "",
        isSpecial: true
      },
      {
        "pagePath": "/pages/my-self/index",
        "iconPath": "/images/nav/my-off.png",
        "selectedIconPath": "/images/nav/my-on.png",
        "text": "我的",
        isMy:true,
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.log(e.currentTarget.dataset);
      const idx = e.currentTarget.dataset.index;
      const path = e.currentTarget.dataset.path;
      const data = this.data.list[idx];
      if(data.isSpecial){

      }
      else if(data.isMy&&!APP.globalData.userInfo){
        wx.getUserProfile({
          desc: '用于展示用户资料', 
          success: (res) => {
            console.log("用于展示用户资料:",res);
            APP.globalData.userInfo = res.userInfo,
            // get useerinfo
            this.setData({
              hasUserInfo: true
            })
          }
        })
      }
      this.setData({
        selected: idx
      })
      if (this.data.list[idx].isSpecial){
        wx.navigateTo({
          url: path,
        })
        console.log(path)
      }else{
        wx.switchTab({
          url: path,
        })
      }
      console.log(this.data.selected, idx);
    }
  }
})