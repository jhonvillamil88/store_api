const appConfig = require('../config/app')

function getSortParams(req){
    let output = {};
    let order = req.query.order;
    if(!order){
        return appConfig.orderDefault;
    }
    
    let dir = "ASC";
    if(order.startsWith("-")){
        order = order.replace("-","");
        dir = "DESC";
    }
    
    output[order] = dir;

    return output
}

function getPage(req){
    const page = parseInt(req.query.page);
    let skip = 0;
    if(!page){
        return {
            skip,
            take:appConfig.listLimit
        }
    }

    if(page>1){
        skip = ( (page - 1) * appConfig.listLimit );     
    }
    return {
        skip,
        take:appConfig.listLimit
    }
}

module.exports = {
    getSortParams,
    getPage
};