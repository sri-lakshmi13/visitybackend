var express = require('express');
var server = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/est",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);




server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});