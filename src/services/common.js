/**
 * Created by qingcheng on 16/6/8.
 */
var links = require('./links');
var qc = {};

qc.getIndex = function (item, key) {
    key = key || 'name';
    for(var i= 0, len= links.length; i < len; i++){
        if(links[i][key] == item){
            return i;
        }
    }
    return -1;
};

module.exports = qc;
