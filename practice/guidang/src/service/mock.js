import axios from 'axios'
import Mock from 'axios-mock-adapter'
import { account } from './data/account'
let accountObj = {
  Total: 100,
  data: account,
  errorDescription: '操作成功',
  page: 1,
  pagesize: 10,
  successful: '1'
}
export default {
  bootstrap () {
    let mock = new Mock(axios)
    mock.onGet('/account/list').reply(config => {
      // console.log(config)
      let pageAccount = account.slice((config.pageNum - 1) * config.pageSize, config.pageNum * config.pageSize)
      accountObj.data = pageAccount
      let statusAccount = []
      if (config.settleStatus === 1) {
        for (let i = 0; i < account.length; i++) {
          if ((i % 2) === 0) {
            statusAccount.push(account[i])
          }
        }
        accountObj.data = statusAccount
      }
      return new Promise((resolve, reject) => {
        resolve([200, accountObj])
      })
    })
  }
}
