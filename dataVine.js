var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
var port = 8082;

app.get('/', function (req, res) {
    console.log('login hit');
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/login', function (req, res) {
    console.log('login hitting on form submit');
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ userName: "admin@gmail.com" ,
                             password: "pwd" }
    ));
    
});

var server = app.listen(port, function () {
    console.log('Data Vine Server Started');
})