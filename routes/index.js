var format = require('date-fns/format');
var express = require('express');
var router = express.Router();

const msgDate = format(new Date(), 'mm/dd/yyyy hh:mm');

const messages = [
  {
    text: 'yo',
    user: 'Armadillo',
    added: msgDate,
  },
  {
    text: 'testing this',
    user: 'Tester',
    added: msgDate,
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

/* New message. */
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New Message', messages: messages });
});

router.post('/new', function (req, res, next) {
  const newMessage = req.body.newmsg;
  const username = req.body.username;
  const date = format(new Date(), 'mm/dd/yyyy hh:mm');
  messages.push({ text: newMessage, user: username, added: date });
  res.redirect('/');
});

module.exports = router;
