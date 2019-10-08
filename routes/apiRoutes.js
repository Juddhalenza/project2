var db = require("../models");

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
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  // nasa api search TEST
  app.post("/api/rovers", function(req, res) {
    // example variable for date manipulation in axios call
    // date = currentDate;
    // wrap axios call in forLoop
    //Create call on get route for rovers page
    req.axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-2-8&api_key=Yg0nubAuazdBXPOMSsk7GcCa4wjJjAIaYVSBjB78"
      )
      .then(function(data) {
        return res.render("rovers", data);
      });
  });
};
