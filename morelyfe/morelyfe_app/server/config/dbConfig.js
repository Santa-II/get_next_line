const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    password : process.env.RDS_PASSWORD,
    port     : process.env.RDS_PORT,
    database : process.env.RDS_DATABASE,
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
    }
    console.log('connected successfully to DB.');
});

module.exports = connection;