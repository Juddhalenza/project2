/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable indent */
var express = require ('express');
var router = express.Router();
var request = require ('request');

var db = require ('../models');

router.get('/', function(req, res) {
    db.POTD.findAll({
        order: 'potdDate DESC'
    }).then(function (data) {
        var hbsObject = {
            pictures: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/new/potd', function(req, res) {
    
    var searchDate = req.body.date;

    var queryURL = "https://api.nasa.gov/planetary/apod?date=" + searchDate + "&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78";
    
    request(queryURL, function(error, response, body) {
        if (!error && JSON.parse(body).Response !== 'False') {
            console.log(JSON.parse(body));
            
            var pics = "";

            var options = {
                method: "GET",
                url: "https://api.nasa.gov/planetary/apod?date" + date + "&api_key=DEMO_KEY",
                body: {}
                };
        
            request(options, function(error, response, result) {
                if (error) {
                    res.redirect("/");
                }

                if (!JSON.parse(result).results) {
                    res.redirect("/");
                } else {
                    pics = JSON.parse(result).results[0].key;
                    db.POTD.create({
                        potdDate: JSON.parse(body).date,
                        potdImage: JSON.parse(body).hdurl,
                        potdTitle: JSON.parse(body).title
                    }).then(function () {
                        res.redirect("/");
                    });
                }
            });
        } else {
            res.redirect("/");
        }
    });
});

router.put('api/new/saved/:id', function(req, res) {
    var saved = true;
    var ID = req.params.id;

    db.POTD.update({
        saved: saved,
    }, {  where: { id: ID } }).then(function () {
        res.redirect("/");
    });
});

router.put('/:id', function(req, res) {
    var saved = false;
    var ID = req.params.id;

    db.POTD.update({
        saved: saved,
    }, {  where: { id: ID } }).then(function () {
        res.redirect("/");
    });
});


router.delete('/api/new/delete/:id', function(req, res) {
    var ID = req.params.id;

    db.Movie.destroy({
        where: { id: ID }
    }).then(function() {
        res.redirect('/');
    });
});

module.exports = router;