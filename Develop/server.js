// // const express = require('express');
// // const apiRoutes = require('./routes/apiRoutes');
// // const htmlRoutes = require('./routes/htmlRoutes');

// // // Initialize the app and create a port
// // const app = express();
// // const PORT = process.env.PORT || 3001;

// // // Set up body parsing, static, and route middleware
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json()); 
// // app.use(express.static('public'));
// // app.use('/api', apiRoutes);
// // app.use('/', htmlRoutes);

// // app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html'); }); 

// // app.get('/notes', (req, res) => { res.sendFile(__dirname + '/public/notes.html'); }); 

// // app.get('/assets/css/styles.css', (req, res) => { res.sendFile(__dirname + '/public/assets/css/styles.css'); }); 

// // app.get('/assets/js/index.js', (req, res) => { res.sendFile(__dirname + '/public/assets/js/index.js'); }); 

// // app.get('/api/notes', (req, res) => { // Code to read and return the contents of the `db.json` file goes here 
// // });
    
// // // app.post('/api/notes', (req, res) => { // Code to read and update the contents of the `db.json` file goes here  
// // // }); 


// // app.get('/send', (req, res) =>
// //   res.sendFile(path.join(__dirname, 'public/sendFile.html'))
// // );

// // // Start the server on the port
// // app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// // // // need to fill in the code for steps 10 and 11 to read and write data to the db.json file.

// const express = require('express');
// // const apiRoutes = require('./routes/apiRoutes');
// // const htmlRoutes = require('./routes/htmlRoutes');
// const path = require("path");
// const fs = require("fs");
// const uuid = require('uuid');
// const dbData = require("./db/db.json");

// // Initialize the app and create a port
// const app = express();
// const PORT = process.env.PORT || 3001;
// // app.listen('/api/http://localhost:3001/');

// // Set up body parsing, static, and route middleware
// // app.use((req, res, next) => {
// //     res.setHeader('Access-Control-Allow-Origin', '*');
// //     next();
// //   });


// // app.get("/", (req, res) => {
// //     res.sendFile(path.join(__dirname, "public/index.html"));
// //   });
  
// //   //todo - * directory thing
  
// //   app.get("/notes", (req, res) => {
// //     res.sendFile(path.join(__dirname, "public/notes.html"));
// //   });
  
// //   app.get("/api/notes", (req, res) => res.json(dbData));
  
// //   app.post("/api/notes", (req, res) => {
// //     const newNote = req.body;
// //     newNote.id = uuid.v4();
// //     const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
// //     // Add the new note to the array of notes
// //     currentNotes.push(newNote);
// //     // Write the updated array of notes to db.json
// //     fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));
// //     res.json(newNote);
// //     console.info(`${req.method} request received`);
// //   });
  
// //   app.delete("/api/notes/:id", (req, res) => {
// //     const noteId = req.params.id;
// //     // Read the current notes from db.json
// //     const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
// //     // Filter out the note with the specified ID
// //     const updatedNotes = currentNotes.filter((note) => note.id !== noteId);
// //     // Write the updated array of notes to db.json
// //     fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
// //     res.json({ message: 'Note deleted successfully' });
// //     console.info('Note deleted successfully');
// //   });
  
// // //   app.listen(PORT, () => {
// // //     console.log(`Server listening at http://localhost:${PORT}`);
// // //   });
  
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // // app.use(cors());
// // app.use(express.static('public'));
// // app.use('/api', apiRoutes);
// // app.use('/', htmlRoutes);


// app.get('/index.html', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"));
//   });
  
//   app.get('/notes.html', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/sendFile.html'))
// );
  
//   app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/notes.html"));
//   });
  
//   app.get("/api/notes", (req, res) => res.json(dbData));
  
//   app.post("/api/notes", (req, res) => {
//     const newNote = req.body;
//     newNote.id = uuid.v4();
//     const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
//     // Add the new note to the array of notes
//     currentNotes.push(newNote);
//     // Write the updated array of notes to db.json
//     fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));
//     res.json(newNote);
//     console.info(`${req.method} request received`);
//   });
  
//   app.delete("/api/notes/:id", (req, res) => {
//     const noteId = req.params.id;
//     // Read the current notes from db.json
//     const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
//     // Filter out the note with the specified ID
//     const updatedNotes = currentNotes.filter((note) => note.id !== noteId);
//     // Write the updated array of notes to db.json
//     fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
//     res.json({ message: 'Note deleted successfully' });
//     console.info('Note deleted successfully');
//   });

//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'SameSite': 'none',
//       'Secure': true
//     },
//     body: JSON.stringify(newNote)
//   });

// // Start the server on the port
// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

