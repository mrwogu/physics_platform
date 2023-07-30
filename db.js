const Pool = require('pg').Pool;

const pool = new Pool( {
    user: "postgres",
    host: "localhost",
    database: "physics_platform",
    password: "password",
    port: 5432
});

module.exports = pool;