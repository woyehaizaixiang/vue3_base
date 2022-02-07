import axios from 'axios'
import router from '../router'
import { Message } from 'ant-design-vue'
import hexMD5 from 'md5'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 60000

// 开始请求设置，发起请求拦截
axios.interceptors.request.use(config => {
  const signatureObj = signature()
  const token = localStorage.getItem('token')
  const publicParams = {
    app: 1,
    proname: '',
    token: token,
    version: '1.0.0',
    appVersion: ''
  }
  config.params = Object.assign(
    {},
    config.params,
    publicParams,
    signatureObj
  )
  return config
}, error => {
  return Promise.reject(error)
})

// 签名
function signature () {
  const apiPrivKey = '1FWbxxnb4sJ8$@R!E5rx'
  const num = new Date().getTime()
  const str = String(num - 1539328140705)
  const mp = 'aRHAbMQYiO'
  let ranNum = ''
  for (let i = 0; i < str.length; i++) {
    const n = str.charAt(i)
    ranNum += mp.charAt(n)
  }
  const sign = hexMD5(apiPrivKey + num)
  return {
    ranNum: ranNum,
    sign: sign
  }
}

// respone 响应拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      return response.data
    } else if (res.code === 7000) {
      router.push('/login')
      Message.error(res.msg)
      return response.data
    } else if (res.code === 7001) {
      return response.data
    } else {
      return response.data
    }
  },
  error => {
    Message.error('网络故障')
    return Promise.reject(error)
  }
)

export default axios
