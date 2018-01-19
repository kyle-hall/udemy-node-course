
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

let command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
    console.log("Adding a new note...");
} else if (command === 'list') {
    console.log("Listing all the notes...");
} else if (command === 'read') {
    console.log('Reading note...');
} else if (command === 'remove') {
    console.log('Removing the note...');
} else {
    console.log('Command not recognized. Try again..');
}
