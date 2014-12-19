//INIT AND LIBRARIES
var express = require('express');
var app = express();

//MIDDLEWARRE
app.use(express.static('./'));
app.set('view engine', 'jade');

//app.engine('html', require('ejs').renderFile);
app.get('/', function(req, res) {

  var locals = {
    myname : "EJL"
  };
//});

//ROUTES
//app.get('/', function(req, res) {

  // res.render('./index', {
  //   myname : "jon",

    locals.mypets = [
      "mochi",
      "mochi",
      "boba", 
      "cookie",
      "cat"
    ];
//   });
// });

res.render ('./index', locals);
});
//EXPORT THIS FILE AS A MODULE
module.exports.app = app;