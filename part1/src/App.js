
import './App.css';
import Mensaje from './mensaje.js';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Mensaje color='red' message='Estampos '/>
      <Mensaje color='blue' message='trabajando '/>
      <Mensaje color='green' message='con react'/>
    </div>
  );
}

export default App;
