const mysql = require('mysql');

const connectionMySQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'links'
});

connectionMySQL.connect((error) => {
    if (error) {
        console.error('Could not connect to database:', error);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = connectionMySQL;
