// pages/home/home.js
import Category from '../../model/category'
import Service from '../../model/service'
import { throttle } from '../../utils/utils'

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
    ],
    tabIndex: 0,
    categoryId: 0,
    loading: true,
    serviceList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    setTimeout(function() {
      that.setData({
        serviceList: [
          {
            type: 1,
            cover_image: {
              path: '/images/cabin.jpeg'
            },
            title: '水电装修(测试)',
            category: '疏通',
            publisher: {
              avatar: '/images/cabin.jpeg',
              nickname: '粉刷匠',
            },
            score: '4.5',
            create_time: '2022-02-10 15:32:10',
            price: '999',
            sales_volume: '99'
          },
          {
            type: 1,
            cover_image: {
              path: '/images/cabin.jpeg'
            },
            title: '水电装修(测试)',
            category: '疏通',
            publisher: {
              avatar: '/images/cabin.jpeg',
              nickname: '粉刷匠',
            },
            score: '4.5',
            create_time: '2022-02-10 15:32:10',
            price: '999',
            sales_volume: '99'
          },
          {
            type: 1,
            cover_image: {
              path: '/images/cabin.jpeg'
            },
            title: '水电装修(测试)',
            category: '疏通',
            publisher: {
              avatar: '/images/cabin.jpeg',
              nickname: '粉刷匠',
            },
            score: '4.5',
            create_time: '2022-02-10 15:32:10',
            price: '999',
            sales_volume: '99'
          },
          {
            type: 1,
            cover_image: {
              path: '/images/cabin.jpeg'
            },
            title: '水电装修(测试)',
            category: '疏通',
            publisher: {
              avatar: '/images/cabin.jpeg',
              nickname: '粉刷匠',
            },
            score: '4.5',
            create_time: '2022-02-10 15:32:10',
            price: '999',
            sales_volume: '99'
          },
          {
            type: 1,
            cover_image: {
              path: '/images/cabin.jpeg'
            },
            title: '水电装修(测试)',
            category: '疏通',
            publisher: {
              avatar: '/images/cabin.jpeg',
              nickname: '粉刷匠',
            },
            score: '4.5',
            create_time: '2022-02-10 15:32:10',
            price: '999',
            sales_volume: '99'
          },
          {
            type: 1,
            cover_image: {
              path: '/images/cabin.jpeg'
            },
            title: '水电装修(测试)',
            category: '疏通',
            publisher: {
              avatar: '/images/cabin.jpeg',
              nickname: '粉刷匠',
            },
            score: '4.5',
            create_time: '2022-02-10 15:32:10',
            price: '999',
            sales_volume: '99'
          }
        ],
        loading: false
      })
    }, 3000)
    // this._getServiceList()
    // this._getCategoryList()
  },

  // 私有函数
  // 发送请求
  async _getServiceList() {
    const serviceList = await service.getServiceList(this.data.categoryId, this.data.tabIndex)
    // this.setData({
    //   serviceList
    // })
  },

  _getCategoryList() {
    const categoryList = Category.getCategoryListWithAll()
    // this.setData({
    //   categoryList
    // })
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
  onPullDownRefresh: async function () {
    // console.log('下拉刷新')
    // const serviceList = await service.reset().getServiceList()
    // this.setData({
    //   serviceList
    // })
    this._getServiceList()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function () {
    console.log('上拉加载')
    if (!service.hasMoreData) return
    const serviceList = await service.getServiceList()
    // this.setData({ serviceList })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleTabChange: function (event) {
    const tabIndex = event.detail.index
    console.log(tabIndex)
    this.data.tabIndex = tabIndex
    // this._getServiceList()
  },

  handleCategoryChange: throttle(function (event) {
    if (this.data.categoryId === event.currentTarget.dataset.id) {
      return
    }
    console.log(event)
    const categoryId = event.currentTarget.dataset.id
    this.categoryId = categoryId
    this._getServiceList()
  }),

  handleSelectService: function (event) {
    console.log(event)
    const service = event.currentTarget.dataset.service
    wx.navigateTo({
      url: '/pages/service-detail/service-detail?service_id=' + service.id
    })
  }
})
