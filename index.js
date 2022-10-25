'use strict'
const app = require('./app');
const port = process.env.PORT || 3800;

app.listen(port, () => {
    console.log(`servidor corriendo en http://localhost:${process.env.PORT}` );
});