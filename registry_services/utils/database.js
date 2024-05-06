var express = require('express');
var sql = require("mssql");

const dotenv = require('dotenv');
dotenv.config()

// config for your database
var config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: 'mssql02.au.ds.network', 
    database: '_ss24inDataBase2',
    options: {
        trustServerCertificate: true,
        // Pool configuration options
        pool: {
            max: 10, // Maximum number of connections in the pool
            min: 0,  // Minimum number of connections in the pool
            idleTimeoutMillis: 30000 // How long a connection is allowed to be idle before being released
        }
    }
};

// create connection pool
const pool = new sql.ConnectionPool(config);
const databaseConnection = pool.connect();

databaseConnection.then(() => {
    console.log("Connected to SQL Server with connection pooling");
}).catch(err => {
    console.error("Error connecting to SQL Server:", err);
});



module.exports = databaseConnection
