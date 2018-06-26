var querystring = require("querystring")
var url = require("url")
var alldata = require("./dataConfig")
var resData = function(res, data) {
    res.writeHead(200, {
        "Content-type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    });
    res.write(JSON.stringify(data));
    res.end()
}
module.exports = [{
        route: '/api/index',
        handle: function(req, res, next) {
            var id = querystring.parse(url.parse(req.url).query).id
                // console.log(alldata.index)
            resData(res, { num: 3 })
        }
    },
    {
        route: '/api/tab',
        handle: function(req, res, next, url) {
            resData(res, { msg: "haha" })
        }
    },
    {
        route: '/users',
        handle: function(req, res, next, url) {
            resData(res, { msg: "users" })
        }
    },
    // {
    //     route: '/api/list',
    //     handle: function(req, res, next, url) {


    //     }
    // },
    // {
    //     route: '/api/detail',
    //     handle: function(req, res, next, url) {

    //     }
    // }
]