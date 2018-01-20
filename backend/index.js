var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var port = 3020;


mongoose.connect('mongodb://user:12345@ds263847.mlab.com:63847/mernstack').then(()=> {
    console.log('Success connect to database');
}).catch(err => {
    console.log('Failed to start: ', err.stack);
    process.exit(1);
});

var itemRouter = require('./itemRouter');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

app.use('/', (req,res) => {
    res.status(200).json({status: 'home'});
})
app.listen(port, ()=>{
    console.log('App running on port ' + port);
})