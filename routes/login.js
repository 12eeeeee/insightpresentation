var passport = require('passport'),
    Account = require('../model/account');
    Article = require('../model/article');

module.exports = function (app) {
    
    app.get('/', function (req, res) {
        res.render('index', { user : req.user });
    });

    app.get('/register', function(req, res) {
        res.render('register', { });
    });

    app.post('/register', function(req, res) {

        Account.register(new Account({ 
            username : req.body.username,
            birthday : req.body.birthday,
            email    : req.body.email,
            phonenum : req.body.phonenum,
            sex      : req.body.sex,

         }), req.body.password, function(err, account) {
            if (err) {
                return res.render('register', { account : account });
            }
         
            console.log('등록 완료 : username' , req.body.username );
            console.log('등록 완료 : birthday' , req.body.birthday );
            res.redirect('/login.html');
        });
    });

    app.get('/login', function(req, res) {
        res.render('login', { user : req.user });
       /* if(tyoeif(user) == 'undefined')
            res.redirect('/login');
        else
            res.redirect('/index');*/
       
    });

    app.post('/login', passport.authenticate('local'), function(req, res) {
        res.redirect('/index.html');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
};