var express = require('express')
var app = express()

app.get('/',function(req,res){
    
    var lang = req.headers['accept-language']
    var langParse = lang.split(",")
    var soft = req.headers['user-agent']
    var softT = soft.split(")")
    var softParse = softT[0].split("(")
    var packet = {
        "ipaddress" : req.headers['x-forwarded-for'],
        "language" : langParse[0],
        "software" : softParse[1]
    }
    res.send(packet)
})

app.listen(process.env.PORT||8080, function(){
    console.log("header-parse microservice is listening on port")
})