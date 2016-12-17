'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import config from './config';
// import routes from './routes';

// this is a object that let us create a server
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.json({ message: "this is just a test" });
});

app.listen(PORT, function () {
  console.log("Something is going down on", PORT, "...");
});
//# sourceMappingURL=app.js.map