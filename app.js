var express = require(express);
var app = express();

app.get('/add', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.listen(5501)