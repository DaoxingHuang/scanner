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
const menuKeys={
  SHOUYE:"SHOUYE",
  CAMERA:"CAMERA",
  MYSELF:"MYSELF",
}
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
        "text": "首页",
        key:menuKeys.SHOUYE,
      },
      {
        pagePath: "/pages/camera/index",
        iconPath: "/images/nav/camera_circle_fill.svg",
        selectedIconPath: "/images/nav/camera_circle_fill.svg",
        text: "",
        isSpecial: true,
        key:menuKeys.CAMERA
      },
      {
        pagePath: "/pages/my-self/index",
        iconPath: "/images/nav/my-off.png",
        selectedIconPath: "/images/nav/my-on.png",
        text: "我的",
        isMy:true,
        key:menuKeys.MYSELF
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.log("selected:",this.data.selected);
      console.log(e.currentTarget.dataset);
      const idx = e.currentTarget.dataset.index;

      if(this.data.selected === idx){
        return;
      }

      const path = e.currentTarget.dataset.path;
      const data = this.data.list[idx];
      console.log("idx:",idx)
      if(data.isSpecial){
        wx.navigateTo({
          url: path,
        })
      }
      else if(data.isMy&&!APP.globalData.userInfo){
        wx.getUserProfile({
          desc: '用于展示用户资料', 
          success: (res) => {
            console.log("用于展示用户资料:",res);
            APP.globalData.userInfo = res.userInfo,
            APP.globalData.refreshUserInfo(res.userInfo);
            // get useerinfo
            wx.switchTab({
              url: path,
            })
          }
        })
      }
      else{
        wx.switchTab({
          url: path,
        })
      }
      this.setData({
        selected: idx
      })
      console.log(this.data.selected, idx);
    }
  }
})