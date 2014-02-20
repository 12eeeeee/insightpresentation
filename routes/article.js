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

    app.get('/Pmenu/:cPage', function(req, res){
<<<<<<< HEAD
      var currentPage = req.param('cPage');
=======
      var cPage = req.param('cPage');
>>>>>>> 02200914 morning update
        res.render('pmenu',
            {
                 user : req.user,  Article : req.Article , cPage : req.param('cPage')    
            });

        console.log(cPage);

        Article.find({ ptname : cPage }, function(err, Articles, count){
            console.log(Articles); //현재 페이지 제대로 들어 왔는지 확인 


        });

        res.send(cPage);
    });

<<<<<<< HEAD
    app.post('/canvas', function(req, res){
        console.log('canvas is made');

        redirect('/');

    });

    app.get('/canvas', function(req, res){
        res.render('canvas', {user : req.user , Article : req.Article, cPage : req.cPage});
=======
    app.post('/canvas/:cPage', function(req, res){
        var cPage = req.param('cPage');
        console.log('canvas is made');
        console.log('cPage'+cPage);
        console.log('JLIST'+req.body.JLIST);
        res.redirect('/Pmenu/:cPage');

    });

    app.get('/canvas/:cPage', function(req, res){
        var cPage = req.param('cPage');
        res.render('canvas', {user : req.user , Article : req.Article, cPage : cPage});
>>>>>>> 02200914 morning update

    });
   //res.render('Plist', {user : req.user, Article : Article});
}