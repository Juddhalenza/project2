var db = require("../models");
var axios = require("axios");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example

  app.get("/api/rovers/:id/images", function(req, res) {
    // get route params
    // check for query arguments
    var roverId = req.params.id;
    console.log(roverId);
    // var date = req.params.date;
    // for (var i = 0; i < data.length; i++) {
    //   if (chosen === data[i].roverId) {
    //     return res.json(data[i]);
    //   }
    // }
    // res.json(data);
    // build our query to the db or build a URL to make a request to an external api for this data
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78"
      )
      .then(function(data) {

        console.log(data.data.photos);
        return res.render("rovers", data);
      });
  });
  
};
