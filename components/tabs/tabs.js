// components/tabs/tabs.js
Component({
  options: {
    multipleSlots: true,
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
    handleTabChange: function (event) {
      const index = event.currentTarget.dataset.index
      this.setData({
        currentTabIndex: index
      })
      // 触发自定义事件
      this.triggerEvent('change', { index })
    },
  }
})
