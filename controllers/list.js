'use strict'
const List = require('../models/list');
const functions = require('../util/functions');
function getList(req, res){
    const page = functions.getPage(req);
    const sort = {
        order:functions.getSortParams(req)
    }
    const params = {...sort,...page};
    List.find(params).then((list) => {
        return res.status(200).send(list);
    });
}

module.exports.getList = getList;