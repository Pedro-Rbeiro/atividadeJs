const mysql = require('mysql2')
require('dotenv').config()

module.exports = con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
)