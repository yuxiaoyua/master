let account = []
for (let i = 0; i < 100; i++) {
  account.push({
    articleNumber: '无' + i,
    benefitWays: [{
      createTime: '2017-08-17 15:27:11',
      id: 973,
      orderId: 1205973,
      remark: '免息券',
      type: 1
    }],
    billCash: 21.78,
    inCome: 0.18,
    isRefund: 0,
    isSettlement: [ (i % 2) === 1 ? 1 : 2 ],
    kdCom: '无',
    kdNum: '无',
    orderNo: 'PD2017081748312616545',
    orderStatus: 1,
    orderTime: '2017-08-17 15:27:11',
    payType: 1,
    poId: 1205973,
    productName: '电信话费包',
    refundReason: '无退货原因',
    refundTime: '无退货时间',
    salePrice: 19.98,
    sendGoodTime: '无发货时间',
    settleCash: 19.80,
    supplier: '聚通达'
  })
}
export {
  account
}
