var dotenv = require('dotenv');

dotenv.load();

module.exports = {
  client: 'mysql',
  connection: process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  pool: {
    min: 1,
    max: 7
  }

};


/*----------------------------------------------------------------------*/
/*module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'admin123',
    database: 'grocery_store_database'
  }
}*/
/*--------------------------------------------------------------------------*/

/*var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'admin123',
    database : 'angular_store_database'
  },
  pool: {min: 0, max:7}
});*/

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "grocery_store_database"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
