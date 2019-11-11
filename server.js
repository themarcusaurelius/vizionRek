//require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const upload = require('./routes/api/upload');
const formData = require('express-form-data');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config/config');


const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ 
  origin: CLIENT_ORIGIN 
}))

app.use(formData.parse())
app.use(bodyParser.urlencoded({ limit: '256kb', extended: true }))

app.use(bodyParser.json({
  limit: '256kb',
  type: [
    'application/x-www-form-urlencoded',
    'text/plain',
    'application/octet-stream',
    'application/json',
    'application/json; charset=utf-8',
    'text/plain;charset=UTF-8',
    'text/plain;charset=utf-8',
    'text/html; charset=utf-8'
  ]
}))

app.get('/wake-up', (req, res) => res.send('Good'))

//Define Routes
app.use('/api/upload', upload);


// ... other app.use middleware 
if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy', 'loopback');
  //First - Making sure express will serve production assets - main.js, main.css, etc
  app.use(express.static('client/build'));
  //Second -Express will serve up the index.html file if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  }); 
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running On ${PORT}`))