import Http from '../utils/http'

class Service {
  page = 1
  count = 10
  data = []
  hasMoreData = true

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
    this.hasMoreData = !(this.page === serviceList.last_page)
    this.page++
    return this.data
  }
}

export default Service
