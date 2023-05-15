import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [notas, setNotas] = useState([]);
  const [nuevaNota, setNuevaNota] = useState("");
  const [nuevoCorreo, setNuevoCorreo] = useState("");

  const handleBodyChange = (event) => {
    setNuevaNota(event.target.value);
  };
  const handleEmailChange = (event) => {
    setNuevoCorreo(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault();

    const nuevaNotaObj = {
      id: notas.length + 1,
      body: nuevaNota,
      email: nuevoCorreo
    };

    setNotas([...notas, nuevaNotaObj]);
    setNuevaNota("");
    setNuevoCorreo("")
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.json())
        .then((json) => {
          setNotas(json);
        });
    }, 5000);
  }, []);

  if (notas.length === 0) return "Cargando notas...";

  return (
    <div>
      <h1>Notas</h1>
      <form onSubmit={addNote}>
        <label>Introduzca nota:</label>
        <br />
        <input type="text" value={nuevaNota} onChange={handleBodyChange} />
        <br></br>
        <label>Introduzca su correo</label>
        <br></br>
        <input type="text" value={nuevoCorreo} onChange={handleEmailChange} />
        <br></br>
        <button type="submit">Agregar Nota</button>
      </form>
      {notas.map((nota) => (
        <div key={nota.id}>
          <p>Número {nota.id}</p>
          <p>Correo: {nota.email}</p>
          <p>Cuerpo: {nota.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
