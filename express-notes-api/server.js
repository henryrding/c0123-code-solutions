import express from 'express';
import readNotes from './read.js';
import addNote from './add.js';
import deleteNote from './delete.js';
import updateNote from './update.js';

const app = express();
app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const notes = await readNotes();
  res.send(notes[1]);
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const note = await readNotes(req.params.id);
    const [code, object] = note;
    res.status(code).send(object);
    if (code >= 400) {
      throw new Error(object.error);
    }
  } catch (err) {
    console.error('error:', err.message);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const noteWithId = await addNote(req.body);
    const [code, object] = noteWithId;
    res.status(code).send(object);
    if (code >= 400) {
      throw new Error(object.error);
    }
  } catch (err) {
    console.error('error:', err.message);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const note = await deleteNote(req.params.id);
    const [code, object] = note;
    res.status(code).send(object);
    if (code >= 400) {
      throw new Error(object.error);
    }
  } catch (err) {
    console.error('error:', err.message);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const newnoteWithId = await updateNote(req.params.id, req.body);
    const [code, object] = newnoteWithId;
    res.status(code).send(object);
    if (code >= 400) {
      throw new Error(object.error);
    }
  } catch (err) {
    console.error('error:', err.message);
  }
});

app.listen(8080, () => console.log('Express server is listening on port 8080.'));
