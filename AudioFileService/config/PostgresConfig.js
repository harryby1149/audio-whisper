const postgres = require('postgres');

const sql = postgres({
    host: process.env.POSTGRES_HOST_NAME,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD
})

module.exports = sql;