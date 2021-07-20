var express = require('express');
var router = express.Router();
var Link = require('../models/link');
var Util = require('../util/util');

//查询链接资源列表数据
/*
    测试：http://localhost:4000/link/list?page=2&pageSize=8&sort=1
 */
router.get("/list", function (req, res, next) {
    console.log('start request process.')
    let page = parseInt(req.params["page"]);
    let pageSize = parseInt(req.params["pageSize"]);
    // let priceLevel = req.params["priceLevel"];
    let sort = req.params["sort"];
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
    let linkModel = Link.find(params).skip(skip).limit(pageSize);
    // console.log(linkModel)
    linkModel.sort({'createTime':sort});
    linkModel.exec(function (err, doc) {
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
    // let page = parseInt(req.params["page"]);
    // let pageSize = parseInt(req.params["pageSize"]);
    // let priceLevel = req.params["priceLevel"];
    let pId = req.params["pId"];
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
            linkId: pId
        }
    // }
    let linkModel = Link.find(params);
    // console.log(linkModel)
    // linkModel.sort({'createTime':sort});
    linkModel.exec(function (err, doc) {
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

    let title = req.params["title"];
    // let movieArea = req.params["movieArea"];
    // let releaseYear = req.params[releaseYear"];

    let page = parseInt(req.params["page"]);
    let pageSize = parseInt(req.params["pageSize"]);
    let sort = req.params["sort"];
    let skip = (page-1)*pageSize;

    let params = {};
    if(!Util.isEmpty(title)){
        params.title = eval("/"+title+"/i")
    }
    // if(!Util.isEmpty(movieArea)){
    //     params.movieArea = movieArea;
    // }
    // if(!Util.isEmpty(releaseYear)){
    //      if(!Util.isEmpty(JSON.parse(releaseYear)["other"])){
    //         params.releaseYear = {$lte:parseInt(JSON.parse(releaseYear)["other"])};
    //     }else{
    //         params.releaseYear = releaseYear;
    //     }
    // }

    let linkModel = Link.find(params).skip(skip).limit(pageSize);
    linkModel.sort({'createTime':sort});
    linkModel.exec(function (err, doc) {
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
