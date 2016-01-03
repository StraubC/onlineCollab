/*
 * Routes für alle Seitenzugriffe
 */

var express = require('express');
var router = express.Router();

/*
 * GET index page.
 */

router.get('/', function(req, res){
  res.render('index.html', { title: 'Home', loggedIn: req.session.loggedIn, login: req.session.userName });
});

router.get('/home', function(req, res){
  res.render('index.html', { title: 'Home', loggedIn: req.session.loggedIn, login: req.session.userName });
});

router.get('/index', function(req, res){
  res.render('index.html', { title: 'Home', loggedIn: req.session.loggedIn, login: req.session.userName });
});

/*
 * GET Kalender page.
 */

router.get('/kalender', function(req, res){
  res.render('kalender.html', { title: 'Kalender', loggedIn: req.session.loggedIn, login: req.session.userName });
});

/*
 * GET Notizen page.
 */

router.get('/notizen', function(req, res){
  res.render('notizen.html', { title: 'Notizen', loggedIn: req.session.loggedIn, login: req.session.userName });
});



module.exports = router;

