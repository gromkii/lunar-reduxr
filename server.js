var express      = require('express'),
  app            = express(),
  bodyParser     = require('body-parser'),
  methodOverride = require('method-override'),
  port           = process.env.PORT || 3000;

app.use(express.static('public'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended:false}))
  .use(methodOverride('_method'));

app.listen(port, () => {
  console.log('Server is listening on %s! 🐰', port);
});
