
'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const list_routes = require('./routes/list');

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', list_routes);
module.exports = app;