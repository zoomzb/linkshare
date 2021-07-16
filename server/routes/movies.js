var express = require('express');
var router = express.Router();
var Movies = require('../models/movies');
var Util = require('../util/util');

//查询商品列表数据
/*
    测试：http://localhost:4000/goods?page=2&pageSize=8&sort=1
 */
router.get("/list", function (req, res, next) {
    console.log('start request process.')
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
    let moviesModel = Movies.find(params).skip(skip).limit(pageSize);
    // console.log(moviesModel)
    moviesModel.sort({'createTime':sort});
    moviesModel.exec(function (err, doc) {
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
            movieId: pId
        }
    // }
    let moviesModel = Movies.find(params);
    // console.log(moviesModel)
    // moviesModel.sort({'createTime':sort});
    moviesModel.exec(function (err, doc) {
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

    let movieCategory = req.param("movieCategory");
    let movieArea = req.param("movieArea");
    let releaseYear = req.param("releaseYear");

    let page = parseInt(req.param("page"));
    let pageSize = parseInt(req.param("pageSize"));
    let sort = req.param("sort");
    let skip = (page-1)*pageSize;

    let params = {};
    if(!Util.isEmpty(movieCategory)){
        params.movieCategory = eval("/"+movieCategory+"/i")
    }
    if(!Util.isEmpty(movieArea)){
        params.movieArea = movieArea;
    }
    if(!Util.isEmpty(releaseYear)){
         if(!Util.isEmpty(JSON.parse(releaseYear)["other"])){
            params.releaseYear = {$lte:parseInt(JSON.parse(releaseYear)["other"])};
        }else{
            params.releaseYear = releaseYear;
        }
    }

    let moviesModel = Movies.find(params).skip(skip).limit(pageSize);
    moviesModel.sort({'createTime':sort});
    moviesModel.exec(function (err, doc) {
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

//加入到购物车
router.post("/addCart", function (req,res,next) {
    var userId = '100000077',productId = req.body.productId;
    var User = require('../models/user');
    User.findOne({userId:userId}, function (err,userDoc) {
        if(err){
            res.json({
                status:"1",
                msg:err.message
            })
        }else{
            console.log("userDoc:"+userDoc);
            if(userDoc){
                var goodsItem = '';
                userDoc.cartList.forEach(function (item) {
                    if(item.productId == productId){
                        goodsItem = item;
                        item.productNum ++;
                    }
                });
                if(goodsItem){
                    userDoc.save(function (err2,doc2) {
                        if(err2){
                            res.json({
                                status:"1",
                                msg:err2.message
                            })
                        }else{
                            res.json({
                                status:'0',
                                msg:'',
                                result:'suc'
                            })
                        }
                    })
                }else{
                    Goods.findOne({productId:productId}, function (err1,doc) {
                        if(err1){
                            res.json({
                                status:"1",
                                msg:err1.message
                            })
                        }else{
                            if(doc){
                                doc.productNum = 1;
                                doc.checked = 1;
                                userDoc.cartList.push(doc);
                                userDoc.save(function (err2,doc2) {
                                    if(err2){
                                        res.json({
                                            status:"1",
                                            msg:err2.message
                                        })
                                    }else{
                                        res.json({
                                            status:'0',
                                            msg:'',
                                            result:'suc'
                                        })
                                    }
                                })
                            }
                        }
                    });
                }
            }
        }
    })
});

module.exports = router;
