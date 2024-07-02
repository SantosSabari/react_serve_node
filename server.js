const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');
const users_API = require('./api/user');
const gallery_API = require('./api/imagegallery')
const signUp_API  = require('./api/signup')
const { getAllSongs } = require('./api/allsongs');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.group('********************************************');
  console.log('Connected to the database');
  console.groupEnd()
});

app.post('/api/signup', signUp_API.signUp)
app.post('/api/login', signUp_API.logIn)

app.get('/api/user', users_API.getAllUsers);
app.post('/api/addUser', users_API.addUser);
app.put('/api/user/:id', users_API.updateUser);
app.delete('/api/user/:id', users_API.deleteUser);
app.get('/api/gallery', gallery_API.getImageGallery);
app.post('/api/addImage', gallery_API.addImgGallery)
// app.get('/api/songs', getAllSongs);


console.log(__filename)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
