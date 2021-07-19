var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var linkSchema = new Schema({
    "linkId":{type:Number},
    "imgUrl":String,
    "resUrl":String,
    "title":String,
    "desc":String,
    "tags":String,
    "categoryPId":Number,
    "viewCount":Number,
    "createTime":Date
});

module.exports = mongoose.model('Link',linkSchema);
