const typeorm = require("typeorm");
const dbConfig = require("../config/db");

typeorm.createConnection({
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database,
    username: process.env.USER_DB,
    password: process.env.USER_PASS,
    synchronize: true,
    entities: [
        require("../entity/List")
    ]
});

module.exports = typeorm;