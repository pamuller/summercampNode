//to call use http://localhost:3000/province
"use strict";
var express = require('express');
var router = express.Router();
//var db = require("../orientDBConfig.js");

var userRegisterModel= require("../models/userRegisterModel");


/* GET province listing. */
router.get('/findAll', function(req, res, next) {


	let provinces = userRegisterModel.findall(res,req);
	console.log('active users', provinces);

});


/* Add province. */
router.post('/add', function(req, res, next) {


	let userRegister = userRegisterModel.add(res,req);
	console.log('active users', userRegister);

});


/* Delete province. */
router.delete('/add:id', function(req, res, next) {


	let provinces = userRegisterModel.delete(res,req);
	console.log('active users', provinces);

});

/* Update province. */
router.put('/add', function(req, res, next) {

	let userRegister = userRegisterModel.update(res,req);
	console.log('active users', userRegister);
});

module.exports = router;