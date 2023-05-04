import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];




const App = (props) => {
  const [selected, setSelected] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const [votos, setVotos] = useState({0: 0, 1: 0, 2: 0, 3: 0,4: 0,5: 0})

  const ActualizarVotos = () => {
    const anecdotaSeleccionada = props.anecdotes[selected];
    if (anecdotaSeleccionada === props.anecdotes[0]){
      setVotos({...votos, 0: votos[0] + 1});
    } else if (anecdotaSeleccionada === props.anecdotes[1]){
      setVotos({...votos, 1: votos[1] + 1});
    } else if (anecdotaSeleccionada === props.anecdotes[2]){
      setVotos({...votos, 2: votos[2] + 1});
    } else if (anecdotaSeleccionada === props.anecdotes[3]){
      setVotos({...votos, 3: votos[3] + 1});
    } else if (anecdotaSeleccionada === props.anecdotes[4]){
      setVotos({...votos, 4: votos[4] + 1});
    } else if (anecdotaSeleccionada === props.anecdotes[5]){
      setVotos({...votos, 5: votos[5] + 1});
    } else {
      console.log("Error.");
    }
  };
  const maxVotes = Math.max(...Object.values(votos));
  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>

      <button onClick={ActualizarVotos}>Vote</button>
      <button onClick={generateRandomNumber}>Next anecdote</button>
      <h3>Votos de la primera linea: {votos[0]}</h3>
      <h3>Votos de la primera linea: {votos[1]}</h3>
      <h3>Votos de la primera linea: {votos[2]}</h3>
      <h3>Votos de la primera linea: {votos[3]}</h3>
      <h3>Votos de la primera linea: {votos[4]}</h3>
      <h3>Votos de la primera linea: {votos[5]}</h3>
      <h1>Frase con más votos</h1>
      <p>{props.anecdotes[Object.keys(votos).find(key => votos[key] === maxVotes)]}</p>
    </div>
  );
};

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);
