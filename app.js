const express = require('express');

const memcached = require('memcached');

let memC = new memcached('localhost:11211');

const app = express();

app.get('/', (req,res) => {
  res.send('here we are');
});

app.get('/memc/', (req, res) => {
    res.send(   '<br>memc gameCode details for:<br>' +
                '<br>get/GC_linked_users<br>' +
                '<br>get/GC_game_status<br>' +
                '<br>get/GC_user_results<br>' +
                '<br>get/GC_user_ranking<br>' +
                '<br>get/GC_teacher_details'
    );
});

 app.listen(5000, () => {
  console.log('App listening on port 5000!');
 });
