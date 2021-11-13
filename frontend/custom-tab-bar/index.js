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
        "pagePath": "/pages/my/index",
        "iconPath": "/images/nav/my-off.png",
        "selectedIconPath": "/images/nav/my-on.png",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const idx = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path
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