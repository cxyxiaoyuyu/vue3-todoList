import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

let loading: any

const startLoading = () => {
  const options = {
    lock: true,
    text: '加载中...',
    background: 'rgba(0,0,0,0.7)'
  }
  loading = ElLoading.service(options)
}
const endLoading = () => {
  console.log('endloading')
  loading.close()
}

// 请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  startLoading()
  return config
})

// 响应拦截
axios.interceptors.response.use((res: AxiosResponse<any, any>) => {
  endLoading()
  if (res.data.meta.status !== 200 && res.data.meta.status !== 201) {
    ElMessage.warning(res.data.meta.msg)
    return
  }
  return res.data
}, error => {
  endLoading()
  return Promise.reject(error)
})

export default axios