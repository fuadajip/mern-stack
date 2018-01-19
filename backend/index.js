var express = require('express');
var app = express();

var port = 3020;

app.listen(port, ()=>{
    console.log('App running on port ' + port);
})