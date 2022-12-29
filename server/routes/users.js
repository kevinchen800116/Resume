var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/users/2', function (req, res, next) {
  res.send(req.query)
  // res.send('respond with a resource');
});

module.exports = router;
