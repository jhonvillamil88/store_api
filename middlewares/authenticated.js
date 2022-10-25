'user strict'
const jwt = require('jwt-simple');
// const moment = require('moment');
const secret = 'clave_secreta_';
exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message: 'La peticion no tiene la cabecera de autenticación'});
    } else {
        var token = req.headers.authorization.replace(/['"]+/g, '');
        try{
            var payload = jwt.decode(token, secret);
            //for a next version
            // if(payload.exp > moment().unix()){
            //     return res.status(401).send({
            //         message: 'EL token ha expirado'
            //     });
            // }
        } catch (ex){
            return res.status(404).send({
                message: 'EL token no es valido'
            });
        }
        next();
    }
}