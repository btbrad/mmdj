import Http from '../utils/http'
import Base from './base'

class Service extends Base{

  // 一个实例对象，它是有状态的

  async getServiceList(category_id = null, type = null) {
    console.log('获取服务列表')
    if (!this.hasMoreData) {
      return this.data
    }
    const serviceList = await Http.request({
      url: '/service/list',
      data: { page: this.page, count: this.count, category_id: category_id || '', type: type || '' },
    })
    this.data = this.data.concat(serviceList)
    this.hasMoreData = !(this.page === serviceList?.last_page)
    this.page++
    return this.data
  }

  static getServiceById(serviceId) {
    return Http.request({
      url: `/service/${serviceId}`
    })
  }

}

export default Service
