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
  console.log(req.body);

  knex('posts').insert({
    post_text:req.body.post_text
  }).returning('*').then(returning => {
    res.json(returning);
  });
});

app.listen(port, () => {
  console.log('Server is listening on %s! 🐰', port);
});
