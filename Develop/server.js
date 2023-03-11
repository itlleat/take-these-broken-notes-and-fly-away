// const express = require('express');
// const fs = require('fs');
// const path = require('path');
// const dbData = require('./db/db.json');
// const uuid = require('uuid');
// const PORT = process.env.PORT  || 3001;
// const app = express();
// const api = require('./public/js/index');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/index.html"));
// });

// app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/notes.html"));
// });

// app.get("/api/notes/:id", (req, res) => res.json(dbData));

// app.post("/api/notes", (req, res) => {
//     const newNote = req.body;
//     newNote.id = uuid.v4();
//     const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
//     fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));
//     res.json(newNote);
//     console.info(`${req.method} request received`);
// });

// app.delete("/api/notes/:id", (req, res) => {
//     const noteId = req.params.id;
//     const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
//     const updatedNotes = currentNotes.filter((note) => note.id !== noteId);
//     fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
//     res.json({ message: 'Note deleted successfully' });
//     console.info('Note deleted successfully');
// });

// app.listen(PORT, () => {
//     console.log(`Server is listening at http://localhost:${PORT}`);
// });

const express = require('express');
const fs = require('fs')
// const mime = require('mime');
const path = require('path');
// const api = require('./routes/index');
const dbData = require('./db/db.json');
const uuid = require('uuid');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api', api);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes", (req, res) => res.json(dbData));

// app.get('/assets/css/styles.css', function(req, res) {
//     res.setHeader('Content-Type', mime.getType('css'));
//     res.sendFile(__dirname + '/public/css/styles.css');
//   });


  app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        newNote.id = uuid.v4();
        const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
        fs.writeFileSync("./db/db.json", JSON.stringify(currentNotes));
        res.json(newNote);
        console.info(`${req.method} request received`);
    });
    
    app.delete("/api/notes/:id", (req, res) => {
        const noteId = req.params.id;
        const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
        const updatedNotes = currentNotes.filter((note) => note.id !== noteId);
        fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
        res.json({ message: 'Note deleted successfully' });
        console.info('Note deleted successfully');
    });
    


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🤯`)
);
