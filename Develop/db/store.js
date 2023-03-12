// I'm using the uuidv4 package so that the users unique id does not have time or location tracking information
const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const uuidv1 = require('uuid/v1');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync ('db/db.json', 'utf8');
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }


getNotes () {
    return this.read().then((notes) => {
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
            parsedNotes = [];
        }

        return parsedNotes;
    });
}

addNote(note) {
    const { title, text } = note;

    if(!title || !text) {
        throw new Error("Blank fields will not be tolerated round these parts");
    }

    const newNote = { title, text, id: uuidv4() };

    return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }

    removeNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports = new Store();

