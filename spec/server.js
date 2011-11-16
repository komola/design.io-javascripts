(function() {
  var app, coffee, connect, express, jade;
  express = require("express");
  connect = require('connect');
  app = express.createServer();
  coffee = require('coffee-script');
  app.listen(4189);
  jade = require("jade");
  app.use(express.static(__dirname + '/..'));
  app.use(connect.bodyParser());
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.get('/', function(req, res) {
    return res.render('index.jade', {
      title: 'See.js',
      address: app.settings.address,
      port: app.settings.port,
      pretty: true
    });
  });
  console.log("Server started on port 4189");
}).call(this);
