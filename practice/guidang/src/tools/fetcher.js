import 'whatwg-fetch'
import fetchJsonp from 'fetch-jsonp'
const reqHeaders = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  sysCode: 'market',
  'market-token': localStorage.market_TOKEN || ''
}
const convertQuery = params => {
  if (!params) {
    return ''
  }
  return Object.keys(params).reduce((pre, key) => (pre + `${key}=${params[key]}&`), '').slice(0, -1)
}
const request = (url, init) => new Promise((resolve, reject) => {
  fetch(url, init).then((res) => {
    if (res.ok) {
      resolve(res.json())
    } else {
      reject(res)
    }
  })
})

export default {
  get: (url, params) => {
    return request(url + '?' + convertQuery(params), {
      headers: reqHeaders
    })
  },
  post: (url, params) => {
    return request(url, {
      method: 'POST',
      headers: Object.assign({}, reqHeaders, {
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: convertQuery(params)
    })
  },
  jsonp: (url, params) => {
    return fetchJsonp(url + '?' + convertQuery(params))
  }
}
