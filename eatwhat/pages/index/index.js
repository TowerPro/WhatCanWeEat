// pages/index/index.js
const app = getApp();
const util = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    BtnInfo: "一人食",
    BtnInfo1: "多人聚餐",
    BtnInfo2: "小食甜品",
    titleStyle: "",
    btnStyle: "",
    waitStyle: "opacity: 0",
    bgiStyle: "opacity: 0.5",
    name: "",
  },

  JumpToSingle:function(){
    wx.navigateTo({
      url: '/pages/single/single',
    })
  },

  JumpToMore:function(){
    wx.navigateTo({
      url: '/pages/more/more',
    })
  },

  JumpToDessert:function(){
    wx.navigateTo({
      url: '/pages/dessert/dessert',
    })
  },


  launch: function (e) {

    this.Openid();
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