import "./style.css";
import Note from "./Note.js"
import { useState } from 'react';

const notas = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true,
    },
]
  
  
export default function App() {
   const [notes, setNotes] = useState(notas)
  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }
  const handleClick = (event) => {
    console.log('crear nota')
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    setNotes([...notes, noteToAddToState])
  };
  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map((note) => <Note key={note.id} content={note.content} date={note.date} />)
      }
      <form>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Crear nota</button>
      </form>
    </div>
  )
}
