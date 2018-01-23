
const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];

  try {
    notes = JSON.parse(fs.readFileSync('note-data.json'));
  } catch (e) {
    console.error('Error: ', e);
  }

  const hasDuplicates = notes.find(e => e.title === title);

  if (hasDuplicates) {
    console.log(`Found a duplicate for ${title}`);
    return;
  }

  const note = {
    title,
    body
  };

  notes.push(note);
  fs.writeFile('note-data.json', JSON.stringify(notes), err => {
    if (err) throw err;
  });
};

const getAll = () => 'Getting all notes.';

const readNote = title => 'Here\'s your note.';

const removeNote = title => 'Removed your note.';

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
