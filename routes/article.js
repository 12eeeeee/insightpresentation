var Article = require('../model/article');

module.exports = function (app) {

    app.get('/createArticle', function(req, res) {
        res.render('createArticle', {user : req.user });


    });

    app.post('/createArticle', function(req, res) {

        var _Article = new Article({ 
            username : req.user.username,
            ptname : req.body.ptname,
            date    : req.body.date,
            place : req.body.place
         });
         
         _Article.save(function(err, _Article){

            console.log('등록 완료 : username' , req.user.username );
         
                      res.redirect('/Plist');
            });
          
        });

    app.get('/Plist', function(req, res){
        //, Article : req.Article
      //  console.log(req._Article.ptname);


        Article.find(function(err, Articles, count){
            res.render('Plist',
            {
                    user : req.user,
                    Articles : Articles
            });

            console.log(Articles);
              /*if(err){
                   console.log("불러오기 실패!");
             }else{
                 console.log(Article);
             }*/
            });

   
        });

    app.get('/Pmenu:cPage', function(req, res){
      var currentPage = req.param('cPage');
        res.render('pmenu',
            {
                 user : req.user,  Article : req.Article , cPage : currentPage    
            });

        console.log(currentPage);

        Article.find({ ptname : currentPage }, function(err, Articles, count){
            console.log(Articles); //현재 페이지 제대로 들어 왔는지 확인 


        });

        res.send(currentPage);
    });

   //res.render('Plist', {user : req.user, Article : Article});
}