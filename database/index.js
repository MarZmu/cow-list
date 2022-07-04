const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: process.env.DB_NAME;
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!');
    connection.query("CREATE IF NOT EXISTS TABLE cows (id INT AUTO_INCREMENT, name VARCHAR(20), desc VARCHAR(100))");
  }
});


// Don't forget to export your functions!
module.exports = {
  insert(cowObj, cb) {
    connection.query(`INSERT INTO cows (name decsription) VALUES ('${cowObj.name}','${cowObj.desc}'`, (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    });
  }

  select(name, cb) {
    connection.query('SELECT * FROM cows', (err, results, fields) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    })
  }
};

