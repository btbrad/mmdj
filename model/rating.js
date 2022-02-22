import Base from "./base";

class Rating extends Base {
  async getServiceRatingList(serviceId) {
    if (!this.hasMoreData) {
      return this.data
    }
    const ratingList = await Http.request({
      url: '/rating/list',
      data: { page: this.page, count: this.count, service_id: serviceId || '' },
    })
    this.data = this.data.concat(ratingList)
    this.hasMoreData = !(this.page === ratingList?.last_page)
    this.page++
    return this.data
  }
}

export default Rating
