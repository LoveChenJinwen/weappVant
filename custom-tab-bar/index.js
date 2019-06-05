// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },
  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    list: [{
      pagePath: "../republic/republic",
      iconPath: "bullhorn-o",
      text: "广场"
    }, {
      pagePath: "../share/share",
      iconPath: "add-o",
      text: "分享"
    }, {
      pagePath: "../examine/examine",
      iconPath: "manager-o",
      text: "审核"
    }, {
      pagePath: "../setting/setting",
      iconPath: "setting-o",
      text: "设置"
    }]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(value) {
      let url = this.data.list[value.detail].pagePath;
      wx.switchTab({ url });
      this.setData({
        selected: value.detail
      })
    }
  }
})
