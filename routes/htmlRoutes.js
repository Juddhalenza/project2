var axios = require("axios");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/rovers", function(req, res) {
    //Create call on get route for rovers page
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-2-8&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78"
      )
      .then(function(data) {
        console.log("data", data);
        // return res.json(data.data.photos);
        return res.render("rovers", {
          photos: data.data.photos
        });
      });
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
