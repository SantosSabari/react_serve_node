const express = require('express');
const connection = require('../db');
const app = express();
function getAllUsers(req, res){
    // API endpoint for querying all users
    const query = 'SELECT * FROM users'; 
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
        // console.log(results);
        });
}

function addUser(req, res){

 
    const emailToCheck = req.body.email;
  //   checkUserExists(emailToCheck, (err, exists) => {
  //     if (err) {
  //         console.error('Error:', err);
  //     } else {
  //         if (exists) {
  //             console.log(`User ${emailToCheck} exists.`);
  //         } else {
  //             console.log(`User ${emailToCheck} does not exist.`);
  //         }
  //     }
  //     // Close the database connection
  //     connection.end();
  // });


    console.log(req.body)
    
    const query = 'INSERT INTO users SET ?'; 
  
    connection.query(query, req.body, (error, result) => {
      if (error) {
        console.error('Error executing the query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ message: 'User added successfully' });
    });
}


function checkUserExists(email, callback) {
  const query = 'SELECT COUNT(*) AS count FROM users WHERE email = ?';
  connection.query(query, [email], (err, results) => {
      if (err) {
          return callback(err, null);
      }
      const userExists = results[0].count > 0;
      callback(null, userExists);
  });
}

function deleteUser(req, res){
    console.log(req.params.id)
    const userID = req.params.id
    const query = `DELETE FROM users WHERE id = ${userID}`;

    connection.query(query, (error, result) => {
        if (error) {
          console.error('Error executing the query:', error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'User Deleted successfully' });
      });
}

function updateUser(req, res){
    console.log(req.params.id)
    const userID = req.params.id
    const updatedUser = req.body;
    const query = `UPDATE users SET name = '${updatedUser.username}', location = '${updatedUser.location}', age = ${updatedUser.age}, email = '${updatedUser.email}' WHERE id = ${userID}`;
    connection.query(query, (error, result) => {
        if (error) {
          console.error('Error executing the query:', error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json({ message: 'User Updated successfully' });
      });
}
module.exports = {
    getAllUsers,
    addUser,
    deleteUser,
    updateUser
}