var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Article = new Schema({
    ptname	: { type: String, default: '' },
    date	: { type: String, default: '' },
    place	: { type: String, default: '' },
    username : {type : String, default: 'undefined'},
    slide : [Slide]
});

var Slide = new Schema({
	slides : [Slide]

});
module.exports = mongoose.model('Article', Article);