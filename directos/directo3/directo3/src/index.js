import ReactDOM from "react-dom";
import {useState} from "react";

const rootElement = document.getElementById("root");

const App = (props) => {
    
    const [contador,setContador] = useState(0);
    
    /*
    const contador = useState(0)
    const contadorValue = contador[0]
    const updateContador = contador[1]
    */
    
    return (
        <div>
            <h1>El valor del contador</h1>
            <h1>{contador}</h1>
            <button onClick={() => {
                setContador(contador+1)
            }}>
                Incrementar
            </button>
        </div>
            );
        };

    

    
    ReactDOM.render(
        <App/>,
        rootElement
        );

    