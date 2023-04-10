const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.send('here we are');
});
 
 app.listen(5000, () => {
  console.log('App listening on port 5000!');
 });
