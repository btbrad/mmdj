import Http from "../utils/http"

class Category {
  
  static async getCategoryList() {
    return Http.request({
      url: 'mmdj/category'
    })
  }

  static async getCategoryListWithAll() {
    const categoryList = Category.getCategoryList()
    categoryList.unshift({ id: 0, name: '全部' })
    return categoryList
  }
}

export default Category
