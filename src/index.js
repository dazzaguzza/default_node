const app = require('./app'),
      port = require('./config').port;

app.listen(port, ()=>{
  console.log(`server run ${port} port`);
});