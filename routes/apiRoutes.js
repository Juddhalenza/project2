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
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample){
  //     res.json(dbExample);
  //   });
  // });
  // nasa api search

  app.get("/rovers", function(req, res) {
    //Create call on get route for rovers page
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-2-8&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78"
      )
      .then(function(data) {
        console.log("rovers", data.data.photos);
        // return res.json(data.data.photos);
        return res.render("rovers", data.data);
      });
  });
};
