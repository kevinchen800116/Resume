var createError = require('http-errors');
var express = require('express');
var path = require('path');
var compass = require('node-compass');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compass({ mode: 'expanded' }));


app.use(indexRouter);
// app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError());
});

// error handler
app.use(function (err, req, res, next) {
  // console.log(err);
  // console.log(err.message);
  // set locals, only providing error in development
  // res.locals.message = err;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  return res.status(err.status || 500).render("error.ejs");
});

// 解決跨域問題
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'POST'],
}));
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// module.exports = app;
var debug = require('debug')('my-application');
app.set('port', process.env.PORT || 3000);

// 啟動監聽
var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
  console.log("server is running on port:" + server.address().port);
});

