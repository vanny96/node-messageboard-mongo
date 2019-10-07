var express = require('express');
var router = express.Router();

var messages = [
  {text: "Hello there", user: "Obi Wan"},
  {text: "Wait, that's illegal", user: "Leila"},
  {text: "I hate sand...", user: "Luke"}
]

var Message = require('../models/message');

/* GET home page. */
router.get('/', function(req, res, next) {

  Message.find(
    {},
    function(err, docs){
      if(err) throw err;      
      res.render('index', { title: 'Message Board', messages: docs });
    }
  )

});

router.get('/new', function(req, res, next) {
  res.render('form', {title : 'New'});
})

router.post('/new', function(req, res, next) {
  let message = new Message(
    {
      text: req.body.text,
      user: req.body.user
    }
  );

  message.save()
  
  res.redirect('/');
})

module.exports = router;
