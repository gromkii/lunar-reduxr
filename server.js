var express      = require('express'),
  app            = express(),
  bodyParser     = require('body-parser'),
  methodOverride = require('method-override'),
  knex           = require('./db/knex'),
  port           = process.env.PORT || 3000;

app.use(express.static('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'));

app.get('/posts', (req, res) => {
  knex.select().table('posts').then(data => {
    res.json(data);
  })
});

app.post('/posts', (req, res) => {
  if (req.body.post_text.length >= 5 && req.body.post_text.length <= 500) {
    knex('posts').insert({
      post_text:req.body.post_text
    }).returning('*').then(returning => {
      res.json(returning);
    });
  } else {
    res.json({error:'Invalid post! Must be between 5 and 500 characters'});
  }
});

app.listen(port, () => {
  console.log('Server is listening on %s! 🐰', port);
});

module.exports = app;
