const mysql = require('mysql');

const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port:3306,
    database: 'react_server',
  });

  module.exports = connection;
  
    
  