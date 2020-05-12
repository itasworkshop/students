var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/student.js');

/* GET ALL Students */
router.get('/', function(req, res, next) {
 Student.find(function (err, products) {
   if (err) return next(err);
   res.json(products);
 });
});

/* GET SINGLE Student BY ID */
router.get('/:id', function(req, res, next) {
 Student.findById(req.params.id, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

/* GET SINGLE Student BY ID */
router.get('/:name', function(req, res, next) {
 Student.findById(req.params.name, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

/* SAVE Student */
router.post('/', function(req, res, next) {
 Student.create(req.body, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

/* UPDATE Student */
router.put('/:id', function(req, res, next) {
 Student.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

/* DELETE Student */
router.delete('/:rollno', function(req, res, next) {
 Student.findByIdAndRemove(req.params.id, req.body, function (err, post) {
   if (err) return next(err);
   res.json(post);
 });
});

module.exports = router;