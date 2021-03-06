import { throttle } from "../../utils/utils"

// components/tabs/tabs.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTabIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabChange: throttle(function (event) {
      const index = event.currentTarget.dataset.index
      console.log(111, index)
      this.setData({
        currentTabIndex: index
      })
      // // 触发自定义事件
      this.triggerEvent('change', { index })
    }),

    switchTab: function ({direction}) {
      console.log(direction, this) 
      if (!direction) {
        return
      }
      if (direction === -1) {
        const index = this.data.currentTabIndex - 1
        this.setData({
          currentTabIndex: index <= 0 ? 0 : index
        })
      }     
      if (direction === 1) {
        const length = this.data.tabs.length
        const index = this.data.currentTabIndex + 1
        this.setData({
          currentTabIndex: index >= length - 1 ? length - 1 : index
        })
      }     
    }

  }
})
