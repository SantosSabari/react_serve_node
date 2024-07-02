const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://<credentials>@cluster0.fla6jjt.mongodb.net/?appName=mongosh+1.10.6";
// const client = new MongoClient(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('MongoDB connection error:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Now you can perform database operations here
});