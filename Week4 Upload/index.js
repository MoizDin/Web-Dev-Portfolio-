var express=require("express")
var fs= require("fs")
var app=express()
// add middle ware function for body parsing
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/',function(req,res){
res.send("hello it is my first express application")
})
app.listen(5000,function(){console.log("server is running on port 5000")})
app.get('/about',function(req,res)
{ res.send("This is basic express application ")
})
app.get('/users/:userId/books/:bookId', function (req, res) {
res.send(req.params)
})

app.get('/GetStudents',function (req,res)
{ studentdata={}
 fs.readFile(__dirname + "/" + "Student.json", 'utf8',
function (err, data) { console.log( data );
 res.json({ 'status':true, 'Status_Code':200,
 'requested at': req.localtime, 'requrl':req.url,
 'request Method':req.method, 'studentdata':JSON.parse(
data)});
});
})

app.get('/GetStudentid/:id',(req,res)=>{
    studentdata={}
    fs.readFile(__dirname + "/" + "Student.json", 'utf8', function (err, data) {
    var students= JSON.parse(data)
    var student=students["Student"+req.params.id]
    console.log("student",student)
    if (student)
    res.json(student)
    else
    res.json({ 'status':true, 'Status_Code':200,
    'requested at': req.localtime, 'requrl':req.url,
    'request Method':req.method, 'studentdata':JSON.parse(data)});
    });
    })

app.get('/studentinfo',function(req,res)
{
res.sendFile('StudentInfo.html', { root: __dirname });
})
app.post('/submit-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName+' ';
    var Age= req.body.myAge+ ' Gender: ' + req.body.gender+''
    Qual= ' Qualification'+ req.body.Qual
    console.log(req.body.Qual)
    res.send({
    status: true,
    message: 'form Details', data: {
    name: name, age:Age, Qualification:Qual,
    }
    });
    });