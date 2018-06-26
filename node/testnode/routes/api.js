var query = require('../config/db_connect'); 
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');

var fs = require('fs');
var path = require('path');
var process;//全局变量获取进度


/* GET home page. */
router.post('/imagepush', function(req, res, next) {
    //用multiparty进行文件的读取
    var form = new multiparty.Form();
    console.log(form)
    //存储文件的地址，注意这个地址是相对于bin下面的www文件的；
    //注意./是直接到bin下面的www文件；
    form.uploadDir = path.join(__dirname, '../public/file');
    console.log( form.uploadDir)
    // 读取文件失败的后的方法；
    form.on('error', function(err) {
        console.log('Error parsing form: ' + err.stack);
    });
    
    form.on('progress', function(bytesReceived, bytesExpected) {
        
        process= Math.round(bytesReceived/bytesExpected * 100);
        console.log(bytesReceived,bytesExpected)
     
    });
    //文件的操作
    form.parse(req, function (err, fields, files){
      console.log(files,fields)
        var filesTmp = JSON.stringify(files,null,2);
        if (err){
            console.log('parse error: ' + err);
            res.send("写文件操作失败。");

        }else {
            // res.send("文件上传成功");
            // console.log('parse files: ' + filesTmp);
            //进行文件的重命名；如果不进行重命名，上传时的文件文件与储存的文件名将不一致； 
            var fileNameArr = Object.keys(files);
            var firstFilename = fileNameArr[0];
            var fileDataArr = files[firstFilename];
            // console.log( typeof fileDataArr);
            // console.log(fileDataArr);
            var fileData = fileDataArr[0];
              console.log(fileData)
            var uploadedPath = fileData.path;//赞存的路径，就是uploadDir存入的路径；

            var dstPath = path.join(__dirname, '../public/file')+"/" + fileData.originalFilename;//重命名后将要转移的路径+文件新名称（读取上传的原文件的名字）
            console.log(dstPath)
            //文件的重命名以及转移操作；
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err){
                    console.log("重命名文件错误："+ err);
                } else {
                    var dss="/file/"+fileData.originalFilename;
                    
                   
                        var sql='insert into image_url(url) values("'+dss+'")'
                        query(sql, function(err, rows, fields) {
                                console.log(err)
                                 console.log("重命名文件成功。");
                            res.send("文件上传成功,并命名成功")
                        })
                }
            });
        }
    });
});

router.get("/progress",function(req,res,next){
    res.send(process)
})

module.exports = router;
