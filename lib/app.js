"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.get('/', function (req, res) {
  res.status(200).send("Hello world!");
});
var server = app.listen(8080, function () {
  console.log("Server is up and running on port 8080");
});