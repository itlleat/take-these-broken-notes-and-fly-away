const router = require('express').router();
const store = require('../store');

router.get("/notes", (req, res) => {
    store   
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .cath((err) => res.json(err));
});

app.delete("/api/notes/:id", (req, res) => {
    const noteId = req.params.id;
    const currentNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    const updatedNotes = currentNotes.filter((note) => note.id !== noteId);
    fs.writeFileSync("./db/db.json", JSON.stringify(updatedNotes));
    res.json({ message: 'Note deleted successfully' });
    console.info('Note deleted successfully');
});

module.exports = router;