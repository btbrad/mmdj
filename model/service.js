import Http from "../utils/http"

class Service {
  async getServiceList(page, count, category_id = null) {
    console.log('获取服务列表')
    return Http.request({ url: '/service/list', data: { page, count } })
  }
}

export default Service
