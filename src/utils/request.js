import Taro from '@tarojs/taro'
// import '@tarojs/async-await'
// import 'regenerator-runtime/runtime'

export function getJSON(url, data) {
  return Taro.request({ url: url, data: data, method: 'GET' })
}
export function postJSON(url, data) {
  return Taro.request({ url: url, data: data, method: 'POST' })
}
