const express = require('express');
const connection = require('../db');
const app = express();
const bcrypt = require('bcrypt');

function logIn(req, res){
    console.log(req.body)
    const { email,password} = req.body
    const query = `SELECT * FROM users WHERE email = '${email}'`
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        // res.json(results);
        console.log(results);
        if(results.length > 0){
            bcrypt.compare(password, results[0].password, (err, passwordMatch) => {
                if(err){
                    console.error('Error comparing passwords:', err);
                    return;
                }

                if(!passwordMatch){
                    console.error('Paww word not match:');
                    res.status(500).json({ error: 'Passwor not match' });
                    return;
                }
    
                res.json(results);
            })
           
        }else{
            res.status(500).json({ error: 'User Not Found' });
            return;
        }
    });
}

function signUp(req, res){
    const { email,password} = req.body
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ error: 'Failed to create user' });
          }
            const query = `INSERT INTO users (name,email, password) VALUES (?,?,?)`;
                const name ='myName'
                connection.query(query, [name, email, hashedPassword], (error, results) => {
                if (error) {
                console.error('Error executing the query:', error);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
                }
                console.log(results);
                res.json({ message: 'User created successfully!' });
            })
    })
    
}

module.exports ={
    logIn,
    signUp
}