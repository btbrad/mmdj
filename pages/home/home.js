// pages/home/home.js
import Service from '../../model/service'

const service = new Service()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['全部服务', '在提供', '正在找'],
    currentTabIndex: 0,
    categoryList: [
      {
        id: 1,
        name: '保洁'
      },
      {
        id: 2,
        name: '汽修'
      },
      {
        id: 3,
        name: '疏通'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getServiceList()
  },

  // 私有函数
  // 发送请求
  _getServiceList() {
    service.getServiceList()
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

  },

  handleTabChange: function (event) {
    const index = event.detail.index
    console.log(index)
  },

  handleCategoryChange: function (event) {
    console.log(event)
    const id = event.currentTarget.dataset.id
  }
})
