const pool = require('./db');

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';

    pool.query(query, (error, results, fields) => {
      if (error) reject(error);
      console.log(results)
      resolve(results);
    });
  });
};

module.exports = { getAllUsers };
