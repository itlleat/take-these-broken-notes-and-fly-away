const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html'); }); 

app.get('/notes', (req, res) => { res.sendFile(__dirname + '/public/notes.html'); }); 

app.get('/assets/css/styles.css', (req, res) => { res.sendFile(__dirname + '/public/assets/css/styles.css'); }); 

app.get('/assets/js/index.js', (req, res) => { res.sendFile(__dirname + '/public/assets/js/index.js'); }); 

app.get('/api/notes', (req, res) => { // Code to read and return the contents of the `db.json` file goes here 
});
    
app.post('/api/notes', (req, res) => { // Code to read and update the contents of the `db.json` file goes here  
}); 

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// need to fill in the code for steps 10 and 11 to read and write data to the db.json file.