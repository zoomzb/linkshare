import axios from 'axios';
let util = {};


let ajaxUrl = '';

util.buildUrl = function(url) {
	ajaxUrl = url;
}

util.ajax = axios.create({
    baseURL: ajaxUrl,	
    timeout: 60000,
});


util.ajax.interceptors.response.use(
    response => {
    	return response;
    },
	err => {
        return Promise.reject(err);
    }
);

util.formatDate = function (date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() 
    + " " +  date.getHours() +":" + date.getMinutes() + ":" + date.getSeconds();
};

util.formatReleaseDate = function (date) {
    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
};


util.isEmpty = function(obj){
    if(typeof obj == "undefined" || obj == null || obj == ""){
        return true;
    }else{
        return false;
    }
}


export default util;