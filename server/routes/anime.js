var express = require('express');
var router = express.Router();
var Anime = require('../models/anime');
var Util = require('../util/util');

//查询动漫列表数据
/*
    测试：http://localhost:4000/goods?page=2&pageSize=8&sort=1
 */
router.get("/list", function (req, res, next) {
    console.log('start anime info request process.')
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
    let animeModel = Anime.find(params).skip(skip).limit(pageSize);
    animeModel.sort({'createTime':sort});
    animeModel.exec(function (err, doc) {
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
            animeId: pId
        }
    // }
    let animeModel = Anime.find(params);
    // console.log(animeModel)
    // animeModel.sort({'createTime':sort});
    animeModel.exec(function (err, doc) {
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

    let animeCategory = req.param("animeCategory");
    let animeArea = req.param("animeArea");
    let releaseYear = req.param("releaseYear");

    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    let sort = req.param("sort");
    let skip = (page-1)*pageSize;

    let params = {};
    if(!Util.isEmpty(animeCategory)){
        params.animeCategory = eval("/"+animeCategory+"/i")
    }
    if(!Util.isEmpty(animeArea)){
        params.animeArea = animeArea;
    }
    if(!Util.isEmpty(releaseYear)){
        if(!Util.isEmpty(JSON.parse(releaseYear)["other"])){
            params.releaseYear = {$lte:parseInt(JSON.parse(releaseYear)["other"])};
        }else{
            params.releaseYear = releaseYear;
        }
    }

    console.log(params)

    let animesModel = Anime.find(params).skip(skip).limit(pageSize);
    animesModel.sort({'createTime':sort});
    animesModel.exec(function (err, doc) {
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
