var Article = require('../model/article');

module.exports = function (app) {

    app.get('/createArticle', function(req, res) {
        res.render('createArticle', { });
    });

    app.post('/createArticle', function(req, res) {

        var _Article = new Article({ 
            username : req.body.username,
            ptname : req.body.ptname,
            date    : req.body.date,
            place : req.body.place
         });
         
         _Article.save(function(err, _Article){

            console.log('등록 완료 : username' , req.body.username );
            res.redirect('/');
            
    });

});
}