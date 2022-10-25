'use strict'
const express = require('express');
const ListController = require('../controllers/list');
const api = express.Router();
const md_auth = require('../middlewares/authenticated');
api.get('/list/', md_auth.ensureAuth, ListController.getList);
// api.get('/list/', ListController.getList);
module.exports = api;