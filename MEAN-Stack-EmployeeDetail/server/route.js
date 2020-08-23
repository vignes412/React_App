var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var empPersonalSchema = new Schema({
  empPerId: ObjectId,
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  martialStatus: String,
  address: String,
  Professional:Object
});


module.exports = function (app) {

  empPersonal = mongoose.model("EmployeePersonal", empPersonalSchema);


  app.get("/api/getEmployee", function (req, res) {
    var a;
    var b;
    var _this = this;
    empPersonal.find(function (err, empPersonalDetail) {
      if (err)
        res.send(err);
      res.send(empPersonalDetail);
    });
  });


  app.post('/api/addEmployee', function (req, res) {
    empPersonal.create(req.body,
      function (err, detail) {
        if (err)
          res.send(err);          
      });
    });
  



}

