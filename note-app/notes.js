
const fs = require('fs');

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('note-data.json'));
  } catch (e) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFile('note-data.json', JSON.stringify(notes), err => {
    if (err) throw err;
  });
};

const addNote = (title, body) => {
  let notes = fetchNotes();

  const hasDuplicates = notes.find(e => e.title === title);

  if (hasDuplicates) {
    return;
  }

  const note = {
    title,
    body
  };

  notes.push(note);
  saveNotes(notes);
  return note;
};

const getAll = () => fetchNotes();

const readNote = title => {
  const notes = fetchNotes();

  return notes.find(note => note.title === title);
};

const removeNote = title => {
  let notes = fetchNotes();
  notes = notes.filter(note => {
    note.title !== title;
  });
  saveNotes(notes);
  return;
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
