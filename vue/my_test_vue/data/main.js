var Mock = require("mockjs")
var querystring = require("querystring")

//node.js的写法
exports.data = function() {
    return [{
            route: '/index',
            handle: function(req, res, next, url) {
                // console.log(url.parse(req.url, true).query.id)
                // console.log(querystring.parse(url.parse(req.url, true).query).id)
                //req   请
                //res   响应的数据
                // res请求头是模拟的后台数据返回告诉浏览器返回数据头，没有头的话数据出不来的
                res.writeHead(200, {
                    "Content-type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*" //允许所有主机进行请求
                });
                var datas = {
                    name: "chen",
                    age: 2344,
                    address: "beijing"
                }
                res.write(JSON.stringify(datas));
                res.end(); //有开头有结尾不然数据依然无返回
            }
        },
        {
            route: '/register',
            handle: function(req, res, next, url) {

                console.log(1111111111111111)
                console.log(req.body)
                console.log(req.query)
                console.log(url.parse(req.url, true))

                res.writeHead(200, {
                    "Content-type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*" //允许所有主机进行请求
                });
                var data = {
                    msg: "ok"
                }
                res.write(JSON.stringify(data));
                res.end(); //有开头有结尾不然数据依然无返回
            }
        },
        {
            route: 'api/smock',
            handle: function(req, res, next) {
                //req   请求头
                //res   响应的数据
                // res请求头是模拟的后台数据返回告诉浏览器返回数据头，没有头的话数据出不来的
                res.writeHead(200, {
                    "Content-type": "application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin": "*"
                });
                var Random = Mock.Random;
                Random.integer();
                Random.string('lower', 4);
                Random.date('yyyy-MM-dd');
                var data = Mock.mock({
                    "menuList|6": [{
                        'menuNav': '@string()',
                        "menuNavContent|1-5": [{
                            'url': "index.html",
                            'name': "@string('lower',4)",
                            'id': "@integer(0,10)"
                        }]
                    }]
                });
                res.write(JSON.stringify(data));
                res.end(); //有开头有结尾不然数据依然无返回
            }
        }
    ]
};