var express = require('express');
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS,PUT"
    );
    next();
});

const mongoose = require("mongoose");




const appRoute = require("./routes/application");

app.use('/apps', appRoute);
app.listen(3000, function () {
    console.log('Express Server listening at port 3000...');
}); 
mongoose
    .connect(
        'mongodb+srv://rutuja:password@cluster0-ucd3n.mongodb.net/node-angular'
        , {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    )
    .then(() => {
        console.log("Connected to database!");

    })
    .catch((err) => {
        console.log("Connection failed!" + err);
    });