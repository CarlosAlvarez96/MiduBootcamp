const express = require("express");
const app = express();

app.use(express.json())

let notes = [
  {
    userId: 1,
    id: 3,
    title:
      "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure",
  },
  {
    userId: 1,
    id: 4,
    title: "eumn et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed",
  },
];
app.get('/', (request, response) => {
    response.send("<h1>Hello world</h1>");
  });
  
app.get('/api/notes', (request, response) => {
    response.json(notes);
  });
  app.get("/api/notes/:id", (request, response) => {
    const id = Number(request.params.id);
    const note = notes.find((note) => note.id === id);
    response.json(note);
  });
  
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);
  response.status(204).end();
});


app.post('/api/notes', (request, response) => {
  const body = request.body;
  console.log(body);
  const ids = notes.map(note => note.id);
  const maxId = Math.max(...ids);
  const newNote = {
    userId: 1,
    id: maxId + 1,
    title: body.title,
    body: body.body
  };
  
    notes = [...notes, newNote];
    response.json(newNote);
  });
  


const PORT = 3001;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
})