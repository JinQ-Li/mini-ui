// pages/stylesm/index.js
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
        path: "view"
      },
      {
        name: "导航组件",
        des: "Navigation",
        icon: "icon-navigation",
        path: "navigation"
      },
      {
        name: "交互组件",
        des: "Interactive",
        icon: "icon-interactive",
        path: "interactive"
      },
      {
        name: "表单组件",
        des: "Form",
        icon: "icon-form",
        path: "form"
      },
    ],
  },

  navigate: function (e) {
    wx.navigateTo({
      url: `/pages/stylesm/${e.currentTarget.dataset.path}/index`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})