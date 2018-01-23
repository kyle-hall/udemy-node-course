
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

const command = process.argv[2];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Added note', note);
  } else {
    console.log('Note title already in use. Try again with a different title');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  if (allNotes.length > 0) {
    allNotes.forEach(note => {
      console.log('Note tite:', note.title);
      console.log('Note body', note.body, '\n');
    });
  } else {
    console.log('There are currently no notes stored.');
  }
} else if (command === 'read') {
  if (!argv.title) {
    console.log('Read needs a title. Try using --title');
    process.exit(1);
  }

  const note = notes.readNote(argv.title);

  if (note) {
    console.log('Note', note);
  } else {
    console.log('There was no note with that title');
  }
} else if (command === 'remove') {
  if (!argv.title) {
    console.log('Remove needs a title. Try using --title');
    process.exit(1);
  }

  notes.removeNote(argv.title);
  console.log('Note removed');
} else {
  console.log('Command not recognized. Try again..');
}
