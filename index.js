const  express = require('express');

const app = express();

const port = 3700;

// jade settings 
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("page");
});

// app.get("/", function(req, res){
//     res.send("It works!");
// });

app.listen(port);
console.log("Listening on port " + port);

