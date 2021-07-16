var express = require('express');
var router = express.Router();
var Drama = require('../models/drama');
var Util = require('../util/util');

//查询动漫列表数据
/*
    测试：http://localhost:4000/goods?page=2&pageSize=8&sort=1
 */
router.get("/list", function (req, res, next) {
    console.log('start drama info request process.')
    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    // let priceLevel = req.param("priceLevel");
    let sort = req.param("sort");
    let skip = (page-1)*pageSize;
    // let priceGt = '';
    // let priceLte = '';
    let params = {};
    // if(priceLevel!='all'){
    //     switch (priceLevel){
    //         case '0':priceGt = 0;priceLte=100;break;
    //         case '1':priceGt = 100;priceLte=500;break;
    //         case '2':priceGt = 500;priceLte=1000;break;
    //         case '3':priceGt = 1000;priceLte=2000;break;
    //         case '4':priceGt = 2000;priceLte=3000;break;
    //         case '4':priceGt = 3000;priceLte=6000;break;
    //     }
    //     params = {
    //         salePrice:{
    //             $gt:priceGt,
    //             $lte:priceLte
    //         }
    //     }
    // }
    let dramaModel = Drama.find(params).skip(skip).limit(pageSize);
    dramaModel.sort({'createTime':sort});
    dramaModel.exec(function (err, doc) {
        console.log(doc)
        if(err){
            res.json({
                status: '1',
                msg:err.message
            });
        } else {
            res.json({
                status: '0',
                msg:'',
                result:{
                    count: doc.length,
                    list:doc
                }
            })
        }
    })
})

router.get("/detail", function (req, res, next) {
    console.log('start request process.')
    // let page = parseInt(req.param("page"));
    // let pageSize = parseInt(req.param("pageSize"));
    // let priceLevel = req.param("priceLevel");
    let pId = req.param("pId");
    // let skip = (page-1)*pageSize;
    // let priceGt = '';
    // let priceLte = '';
    let params = {};
    // if(priceLevel!='all'){
    //     switch (priceLevel){
    //         case '0':priceGt = 0;priceLte=100;break;
    //         case '1':priceGt = 100;priceLte=500;break;
    //         case '2':priceGt = 500;priceLte=1000;break;
    //         case '3':priceGt = 1000;priceLte=2000;break;
    //         case '4':priceGt = 2000;priceLte=3000;break;
    //         case '4':priceGt = 3000;priceLte=6000;break;
    //     }
        params = {
            dramaId: pId
        }
    // }
    let dramaModel = Drama.find(params);
    // console.log(dramaModel)
    // dramaModel.sort({'createTime':sort});
    dramaModel.exec(function (err, doc) {
        console.log(doc)
        if(err){
            res.json({
                status: '1',
                msg:err.message
            });
        } else {
            res.json({
                status: '0',
                msg:'',
                result:{
                    count: doc.length,
                    list:doc
                }
            })
        }
    })
})


router.get("/filter", function (req, res, next) {
    console.log('start request process.')

    let dramaCategory = req.param("dramaCategory");
    let dramaArea = req.param("dramaArea");
    let releaseYear = req.param("releaseYear");

    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    let sort = req.param("sort");
    let skip = (page-1)*pageSize;

    let params = {};
    if(!Util.isEmpty(dramaCategory)){
        params.dramaCategory = eval("/"+dramaCategory+"/i")
    }
    if(!Util.isEmpty(dramaArea)){
        params.dramaArea = dramaArea;
    }
    if(!Util.isEmpty(releaseYear)){
        if(!Util.isEmpty(JSON.parse(releaseYear)["other"])){
            params.releaseYear = {$lte:parseInt(JSON.parse(releaseYear)["other"])};
        }else{
            params.releaseYear = releaseYear;
        }
    }

    let dramasModel = Drama.find(params).skip(skip).limit(pageSize);
    dramasModel.sort({'createTime':sort});
    dramasModel.exec(function (err, doc) {
        console.log(doc)
        if(err){
            res.json({
                status: '1',
                msg:err.message
            });
        } else {
            res.json({
                status: '0',
                msg:'',
                result:{
                    count: doc.length,
                    list:doc
                }
            })
        }
    })
})

module.exports = router;
