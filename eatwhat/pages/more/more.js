// pages/single/single.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    More:"多人聚餐",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.nestprotect.xyz/more.php',
      method: 'GET',
      header: {
        'connect-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({ item_list: res.data })
      },

      fail: function (res) {

      },

      complete: function (res) {

      }
    })
  },
  ReFresh: function () {
    this.onLoad();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  connect: function () {
    var that = this;
    wx.request({
      url: 'https://www.nestprotect.xyz/more.php',
      method: 'GET',
      header: {
        'connect-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({ item_list: res.data })
      },

      fail: function (res) {

      },

      complete: function (res) {

      }
    })
  },
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