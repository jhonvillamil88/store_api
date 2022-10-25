const conn = require('../connection');

function find(sort){
    const listRepo = conn.getRepository("List");
    return new Promise((resolve,reject)=>{
        resolve(listRepo.find(sort));
    })
}

module.exports.find = find;