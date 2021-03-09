const Pool = require("pg").Pool;

const pool = new Pool ({
    user:'cespinosa',
    password:'',
    host:'localhost',
    port:5432,
    database:'postgre-test'
});

module.exports = pool;