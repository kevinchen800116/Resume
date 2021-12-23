var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});

router.get('/api/personal', function (req, res, next) {
  res.send(req.query)
})

router.get('/api/users/1', function (req, res, next) {
  res.send(req.query)
  // res.send('respond with a resource');
})

router.post('/api/favorite', function (req, res, next) {
  console.log("你post到我了")
  res.send(req.body)
})

module.exports = router;
