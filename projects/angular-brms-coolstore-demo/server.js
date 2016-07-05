var express = require('express');
var app = express();

//Mount dependencies
app.use(express.static(__dirname+'/app'));

//Route everything else to AngularJS frontend
app.get('/*',function(req,res){
	res.sendFile(__dirname+'/app/index.html');
});

app.listen(3000, function () {
	console.log("Started coolstore-app listening on port 3000");
});
