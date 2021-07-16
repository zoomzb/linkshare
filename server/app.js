var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var ejs = require('ejs')
var movies = require('./routes/movies');
var anime = require('./routes/anime');
var drama = require('./routes/drama');
var index = require('./routes/index');
var goods = require('./routes/goods');
var users = require('./routes/users');

//连接数据库
mongoose.connect('mongodb://admin:123456@localhost:27017/admin?authSource=admin',{useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connect fail:'));
db.once('open', function() {
    console.log('connect success');
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// app.use(function (req,res,next) {
//     if(req.cookies.userId){
//         next();
//     }else{
//         console.log("url:"+req.originalUrl);
//         if(req.originalUrl=='/users/login' || req.originalUrl=='/users/logout' || req.originalUrl.indexOf('/goods/list')>-1){
//             next();
//         }else{
//             res.json({
//                 status:'10001',
//                 msg:'当前未登录',
//                 result:''
//             });
//         }
//     }
// });

app.use('/', index);
app.use('/movie', movies);
app.use('/anime', anime);
app.use('/drama', drama);
app.use('/goods', goods);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
