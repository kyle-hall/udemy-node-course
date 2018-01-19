
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

const command = process.argv[2];

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(allNotes);
} else if (command === 'read') {
    if (!argv.title) {
        console.log("Read needs a title. Try using '--title'");
        process.exit(1);
    }

    const note = notes.readNote(argv.title);
    console.log(note);
} else if (command === 'remove') {
    if (!argv.title) {
        console.log("Remove needs a title. Try using '--title'");
        process.exit(1);
    }

    notes.removeNote(argv.title);
    console.log('Removing the note...');
} else {
    console.log('Command not recognized. Try again..');
}
