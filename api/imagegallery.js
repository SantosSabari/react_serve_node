const express = require('express');
const connection = require('../db');

function getImageGallery(req, res){
    // API endpoint for querying all users
    const query = 'SELECT * FROM blog'; // Replace 'users' with the actual table name
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
        console.log(results);
        });
}

function addImgGallery(req, res){
    console.log(req.body)
    const { blogName,shot_desc, desc,thumbnail } = req.body; // Assuming name and email are sent in the request body
    // Convert into DB colum name
    const DB = {
        name:blogName,
        short_desc:shot_desc,
        description:desc,
        thumbnail:thumbnail
    }
  
    const query = 'INSERT INTO blog SET ?'; // Assuming 'blog' is the table name
  
    connection.query(query, DB, (error, result) => {
      if (error) {
        console.error('Error executing the query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ message: 'Blog added successfully' });
    });
}

module.exports = {
    addImgGallery,
    getImageGallery
}