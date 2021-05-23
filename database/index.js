// https://www.npmjs.com/package/mysql

// TODO: Establish database connection

var mysql = require('mysql');

// create and export this connection object so that we can use the query method of this object to make queries to the database from our server without having to manually login
var connection = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'ShopDB'
});

connection.connect(err =>
  if (err) {
    console.log(err);
  } else {
    console.log('Connection Successful');
  });

  module.exports = connection;