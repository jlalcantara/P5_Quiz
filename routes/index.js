var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const {models} = require("../models/index.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});
/* GET credits page. */

router.get('/credits', function(req, res, next){
	res.render('credits', {title:'Creditos'});
});

/* GET quizzes page */

router.get('/quizzes', (requ, res, next) => {
	models.quiz.findAll().then( (quizzes) => {
		res.render('quizzes', {quizzes});
	})
	.catch(error => {
	});
});

module.exports = router;
