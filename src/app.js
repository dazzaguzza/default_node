const express = require('express'),
      cors = require('cors'),
      app = express(),
      path = require('path'),
      index_router = require('./routes/index');
 
app.use(cors({ 
  origin(origin, callback) {
    callback(null, true)
  },
  credentials : true 
}));

app.set('views', path.join(__dirname, './views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index_router);


app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500);
  res.json({ code : err.code, msg : err.message, status : err.status });
});

module.exports = app;