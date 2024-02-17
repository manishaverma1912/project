var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
    var firstname=req.body.firstname;
  var lastname=req.body.lastname;
  var fathername=req.body.fathername;
  var mothername=req.body.mothername;
  var age=req.body.age;
  var email=req.body.email;
  var phone=req.body.phone;
  var gender=req.body.gender;
  var password=req.body.password;

	var data = {
        "firstname":firstname,
        "lastname":lastname,
        "fathername":fathername,
        "mothername":mothername,
        "age":age,
        "email":email,
        "phone":phone,
        "Gender":gender,
        "date of birth":birth,
        "Interest":Interest,
        "address":address,
        "password":password

		
        
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('reg_success.html');
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");
