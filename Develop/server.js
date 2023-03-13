// I use eslint as an extra measure to look for bugginess 
/* eslint-disable no-undef */
const express = require('express');
const api = require('./routes/api');
const route = require('./routes/route');
const app = express();
// Configure the port to play nice with Heroku
const PORT = process.env.PORT || 3001;

// Middleware functions to handle types of incoming requests and serve assets. 
// The middleware also provides a separation between the application's core logic and its API routes.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', route);

// These routes are serving the front-end of the application.
// The get requests for each route are met with a server response of the appropriate contents for each specified route.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });

// Puts a link to the port in our terminal when we run $ node server.
app.listen(PORT, () =>console.log(`App listening at http://localhost:${PORT} 🤯`));

