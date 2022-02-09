import APIConfig from '../config/api'
import exceptionMessage from '../config/exception-message'
import wxToPromise from './wx'

class Http{
  static async request({ url, data, method = 'GET' }) {
    const res = await wxToPromise('request', {
      url: `${APIConfig.baseUrl}${url}`,
      data,
      method,
    })
    console.log(res)
    // 全局统一的异常处理
    // 请求成功
    if (res.statusCode < 400) {
      return res.data.data
    }
    // 请求失败
    if (res.statusCode === 401) {
      // token相关操作
      return
    }
    Http._showError(res.data.error_code, res.data.message)

    // wx.request({
    //   url: `${APIConfig.baseUrl}${url}`,
    //   data,
    //   method,
    //   success: function(res) {
    //     console.log(res)
    //     // 全局统一的异常处理
    //     // 请求成功
    //     if (res.statusCode < 400) {
    //       return res.data.data
    //     }
    //     // 请求失败
    //     if (res.statusCode === 401) {
    //       // token相关操作
    //       return
    //     }
    //     Http._showError(res.data.error_code, res.data.message)
    //   }
    // })
  }

  static _showError(errorCode, message) {
    let title = ''
    const errorMessage = exceptionMessage[errorCode]
    title = errorMessage || message || '未知异常'
    title = typeof title === 'object' ? Object.values(title).join(';') : title
    wx.showToast({
      title,
      icon: 'none',
      duration: 3000
    })
  }
}

export default Http
