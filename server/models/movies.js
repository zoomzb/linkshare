var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var moviesSchema = new Schema({
    "movieId":{type:Number},
    "movieName":String,
    "movieCategory":String,
    "movieArea":String,
    "createTime":Date,
    "releaseTime":Date,
    "releaseYear":Number,
    "movieDesc":String,
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

module.exports = mongoose.model('Movies',moviesSchema);
