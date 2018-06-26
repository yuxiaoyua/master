var MockAdapter = require('axios-mock-adapter');
import axios from "axios"
var mock = new MockAdapter(axios);
import Mock from "mockjs"
// mock.onGet('/users').reply(200, {
//     users: [
//         { id: 1, name: 'John Smith' }
//     ]
// });
mock.onGet('/users').reply(function(config) {
    console.log(config)
        // var Random = Mock.Random
    var data = Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            img: Mock.Random.image('200x100'),
            address: Mock.Random.county(),
            name: Mock.Random.cname()
        }]
    })

    if (config.params.id > 10) {
        return [200, { data: data }]
    }
});
mock.onPost('/postuser').reply(200, {
    users: [
        { id: 1, name: 'postuser' }
    ]
});