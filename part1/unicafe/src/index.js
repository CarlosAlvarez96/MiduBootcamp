import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const WarningMessage = () => {
  return <p>No hay estadísticas</p>
}

const StatisticLine = ({good,neutral,bad}) => {
  return {good}+{neutral}+{bad}
}
const Statistics = ({good,neutral,bad}) => {
  return (
    <div>
      <h2>Estadísticas</h2>
      <table>
        <tr>
          <th>Bueno:</th>
          <th>{good}</th>
        </tr>
        <tr>
          <th>Neutral:</th>
          <th>{neutral}</th>
        </tr>
        <tr>
          <th>Malo:</th>
          <th>{bad}</th>
        </tr>
        <tr>
          <th>Todo:</th>
          <th>{good+neutral+bad}</th>
        </tr>
        <tr>
          <th>Media:</th>
          <th>{(good+neutral+bad)/3}</th>
        </tr>
        <tr>
          <th>Positivo:</th>
          <th>{(good+neutral*0+bad*-1)}</th>
        </tr>
      </table>
     
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statistics = <Statistics good={good} neutral={neutral} bad={bad} ></Statistics>
  
  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Bueno</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Malo</button>

      {good+neutral+bad === 0 
      ? <WarningMessage />
      : statistics }
      
    </div>
  )
    
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)