var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var dramaSchema = new Schema({
    "dramaId":{type:Number},
    "dramaName":String,
    "dramaCategory":String,
    "dramaArea":String,
    "createTime":Date,
    "releaseTime":Date,
    "releaseYear":Number,
    "dramaDesc":String,
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

module.exports = mongoose.model('Drama',dramaSchema);
