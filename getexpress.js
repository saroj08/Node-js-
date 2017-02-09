var express=require('express');
var app=express();

app.use(express.static('public'));
app.get('/index2.html',function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname+"/"+"index2.html");
})
app.get('/process_get',function(req,res){
    response={
        Firstname:req.query.firstname,
        Lastname:req.query.lastname,
    };
      console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})