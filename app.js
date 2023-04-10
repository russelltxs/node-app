const express = require('express');
const memcached = require('memcached');

let memC = new memcached('localhost:11211');
const app = express();

app.get('/', (req,res) => {
  res.send('here we are');
});

app.get('/memc/set/:key/:value', (req, res) => { // memC.set(key, value, 600);
    memC.set(req.params.key, req.params.value, 600, (err) => { if (err) { res.send(err); }
        res.send('The string key:value SET = '+req.params.key+':'+req.params.value );  
    });
});

app.get('/memc/get/:key', (req, res) => { // memC.get(key, (err, data) => { do stuff with data
    memC.get(req.params.key, (err, data) => { res.send( 'The retrieved GET value is: '+data ); }); 
});

app.get('/memc/', (req, res) => {
    res.send(   '<br>memc/set/:key/:value   (will set value to key for 600 sec)' +
                '<br>memc/get/:key          (will retrieve vale for key * display)<br>'
    );
});

 app.listen(5000, () => {
  console.log('App listening on port 5000!');
 });
