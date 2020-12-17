/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-17 03:24:49
 * @modify date 2020-12-17 12:40:06
 * @desc [description]
 */

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const HttpError = require("./HttpError");
// Connect to database
const connectToMongo = require("./config/connectToMongo");
require("dotenv").config();

// Routes 
const inventory = require("./routes/inventory");

// Instantiate the app
const app = express()

connectToMongo();

// Middlewares 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// MORGAN (NOTE :- Use this only in development mode.)
app.use(morgan('dev'))

// Handling CORS
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    
    if (req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
        return res.status(200).json({})
    }

    next()
})

// Route middlewares 
app.use('/api/v1/inventory', inventory);

// Handling Errors for unspecified routes 
app.use( (req, res, next) => {
    const error = new HttpError("Could not find specified route.", 500);
    throw error;
})

app.use( (error, req, res, next) => {
    if (res.headerSent){
        next(error);
    }

    res.status(error.code || 500)
    .json({
        "message" : error.message || "An unknown error occurred"
    })
})

module.exports = app;