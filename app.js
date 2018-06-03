const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./keys/keys');
const cors = require('cors');

// Port Number
const port = process.env.PORT || 3000;

// Connect To Database (OLD CODE)
mongoose.connect(keys.database);
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to Database '+ keys.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+ err);
});

const app = express();

const usersRouter = require('./routes/users');
const imagesRouter = require('./routes/images');
const messageRouter = require('./routes/message');

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public/')));
app.use(express.static(path.join(__dirname, 'dist/')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./keys/passport')(passport);

app.use('/users', usersRouter);
app.use('/images', imagesRouter);
app.use('/message', messageRouter)


// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Start Server
app.listen(port, () => {
  console.log('Server started on port '+ port);
});

