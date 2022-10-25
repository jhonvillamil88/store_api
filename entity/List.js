var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "List", // Will use table name `post` as default behaviour.
    tableName: "empresa_test", // Optional: Provide `tableName` property to override the default behaviour for table name. 
    columns: {
        id_empresa: {
            primary: true,
            type: "int",
            generated: true
        },
        nombre: {
            type: "varchar"
        },
        tipo_servicio: {
            type: "text"
        },
        precio: {
            type: "int"
        },
        calificacion: {
            type: "int"
        },
        banner: {
            type: "text"
        }
    }
});