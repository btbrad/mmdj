import Http from "../utils/http"

class Service {
  getServiceList(page, count, category_id = null) {
    console.log('获取服务列表')
    const res = Http.request({ url: '/service/list', data: { page, count } })
    console.log(res)
  }
}

export default Service
