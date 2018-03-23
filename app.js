const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.json());
const events = require('./api/index');

dotenv.config();
(async () => {
    try{
        const client = await MongoClient.connect(process.env.DB);
        const db = client.db('gslr');
        console.log('connected to the database');
        app.use('/',events(db));
    }catch (e){
        console.log("can not connect to the database");
        console.log(e);
    }
})();


module.exports = app;
