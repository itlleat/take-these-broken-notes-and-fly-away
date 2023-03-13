/* eslint-disable no-undef */
// Set up a router, and import a module to define the functionality of the routes that will be handled by that router.
const router = require("express").Router();
// The store module linked to our store directory functions as a way of interacting with a database used for creating, updating, and deleting data.
const store = require("../db/store");


// Sets up an API with three endpoints for interaction with our notes resource. 
// We use HTTP methods(GET, POST, DELETE) define the actions that can be performed on our notes. 
// The API sends and receives data in the JSON format.
// We use JSON for our data interchange for its security, speed, wide support, and simplicity.
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
  return;
});

router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.json(err));
  return;
});

router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
  return;
});

// Export our modules. 
module.exports = router;