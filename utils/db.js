const mysql = require('mysql2');
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'u6703450_dit205'
});