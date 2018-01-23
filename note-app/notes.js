

const addNote = (title, body) => {
  console.log('Adding note', title, body);
};

const getAll = () => "Getting all notes.";

const readNote = title => "Here's your note.";

const removeNote = title => "Removed your note.";

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
