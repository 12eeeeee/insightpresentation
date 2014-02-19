var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Article = new Schema({
    ptname	: { type: String, default: '' },
    date	: { type: String, default: '' },
    place	: { type: String, default: '' },
    username : {type : String, default: 'undefined'},
    slide : [],
    recordReal : {type : String},
    recordPractice : []
});

module.exports = mongoose.model('Article', Article);