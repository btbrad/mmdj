// pages/home/home.js
import Category from '../../model/category'
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
    ],
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getServiceList()
    this._getCategoryList()
  },

  // 私有函数
  // 发送请求
  async _getServiceList() {
    const serviceList = await service.getServiceList(1, 10)
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
  onPullDownRefresh: function () {
    console.log('下拉刷新')
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
    const index = event.detail.index
    console.log(index)
  },

  handleCategoryChange: function (event) {
    console.log(event)
    const id = event.currentTarget.dataset.id
  }
})
