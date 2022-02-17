import Service from "../../model/service"
import User from "../../model/user"

// pages/service-detail/service-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    service: null,
    serviceId: null,
    isPublisher: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    console.log(options)
    this.data.serviceId = options.serviceId
    setTimeout(() => {
      this.setData({
        service: {
          publisher: {
            avatar: '/images/cabin.jpeg',
            nickname: '粉刷匠'
          },
          status: 1
        }
      }, 1000)
    })
    // await this._getService()
    // this._checkRole()
  },

  async _getService() {
    const service = await Service.getServiceById(this.data.serviceId)
    // this.setData({
    //   service
    // })
  },

  _checkRole() {
    const userInfo = User.getUserInfoByLocal()
    if (userInfo && userInfo.id === this.data.service.publisher.id) {
      this.setData({
        isPublisher: true
      })
    }
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