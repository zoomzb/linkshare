var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var animeSchema = new Schema({
    "animeId":{type:Number},
    "animeName":String,
    "animeCategory":String,
    "animeArea":String,
    "createTime":Date,
    "releaseTime":Date,
    "releaseYear":Number,
    "animeDesc":String,
    "viewCount":Number,
    "coverUrl":String,
    "playList":[
        {  
            "playEpisode":Number,
            "playQuality":String,
            "playBrief":String,
            "playUrl":String
        }
    ],
    "tags":String
});

module.exports = mongoose.model('Anime',animeSchema);
