/**
 * TODO API接口对象
 * 发送http请求的接口集合
 */
// json类型的请求
import request from '@/utils/request'
// form表单类型的请求
import requestForm from '@/utils/requestForm'
import md5 from 'md5'
import store from '@/store'

// 查询用户
export function getUser(address) {
  return request({
    url: '/api/business/app/getUser?address=' + address,
    method: 'get'
  })
}

// 根据参数键名查询参数值
export function getConfigKey(configKey) {
  return request({
    url: '/api/business/app/configKey/' + configKey,
    method: 'get'
  })
}

// 更新GOOD
export function upGood(amount) {
  let data = {}
  data.address = store.state.wallet.account
  data.amount = amount
  data.sign = md5(data.address + "-" + data.amount.toString() + "-" + "good").toUpperCase()
  return requestForm({
    url: '/api/business/app/upGood',
    method: 'post',
    data
  })
}

// 更新LP
export function upLp(type, amount) {
  let data = {}
  data.address = store.state.wallet.account
  data.type = type
  data.amount = amount
  data.sign = md5(data.address + "-" + data.type + "-" + data.amount.toString() + "-" + "good").toUpperCase()
  return requestForm({
    url: '/api/business/app/upLp',
    method: 'post',
    data
  })
}

// 提取
export function withdraw(data) {
  data.sign = md5(data.address + "-" + data.amount.toString() + "-" + data.lp.toString() + "-" + data.lpf.toString() + "-" + "good").toUpperCase()
  return requestForm({
    url: '/api/business/app/withdraw',
    method: 'post',
    data
  })
}

// 日志
export function log(category, content) {
  let data = {}
  data.address = store.state.wallet.account
  data.category = category
  data.cont = content
  return requestForm({
    url: '/api/business/app/log',
    method: 'post',
    data
  })
}
