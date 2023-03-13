/* eslint-disable no-undef */
// Util is a node module that provides utility functions for functions that return promises.
const util = require('util');
const fs = require('fs');
// I'm using the uuidv4 package so that the users unique id does not have time or location tracking information.
const { v4: uuidv4 } = require('uuid');

// We create the readFileAsync and writeFileAsync functions here to promisify our fs function.
// Pretend you're a monkey that climbs trees to get bananas and sometimes needs other monkeys help reaching a banana.
// That's kind of like how functions and callbacks work.
// A promise is like a magical banana that falls into your hands when the tree (or function) is ready to give it to you. 
// You don't need to rely on another monkey (or callback function) to help you get the job done.
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// code defining our Store class.  
class Store {
    // method for reading from a file.
    read() {
        return readFileAsync ('db/db.json', 'utf8');
    }

    // method for writing to a file.
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }


// The getNotes method reads the notes from the file using the read method, and then parses the contents of the file into an array of objects representing notes. 
// If the parsing fails, it returns an empty array. 
// The method returns a promise that resolves to the array of parsed notes.
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

// method for adding notes from the file. Includes the uuidv4 encoding with each new note.
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

    // method for adding notes from the file.
    removeNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports = new Store();

