// pages/stylesm/index.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: "基础组件",
        des: "Basic",
        icon: "icon-basic",
        path: "basic"
      },
      {
        name: "布局组件",
        des: "Composition",
        icon: "icon-composition",
        path: "composition"
      },
      {
        name: "视图组件",
        des: "View",
        icon: "icon-view",
      },
      {
        name: "导航组件",
        des: "Navigation",
        icon: "icon-navigation",
      },
      {
        name: "交互组件",
        des: "Interactive",
        icon: "icon-interactive",
      },
      {
        name: "表单组件",
        des: "Form",
        icon: "icon-form",
      },
    ],
  },

  navigate: function (e: any) {
    wx.navigateTo({
      url: `/pages/stylesm/${e.currentTarget.dataset.path}/index`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() { },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() { },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() { },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() { },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() { },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() { },
});
