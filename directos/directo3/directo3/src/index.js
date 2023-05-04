import ReactDOM from "react-dom";
import {useState} from "react";
import React from "react";

const rootElement = document.getElementById("root");

const Counter = ({number}) => {
    console.log("Counter render")
    return <h1>{number}</h1>
}

const App = (props) => {
    
    const [contador,setContador] = useState(0);
    
    /*
    const contador = useState(0)
    const contadorValue = contador[0]
    const updateContador = contador[1]
    */
    
    const handleClick = (check) => {
        check ? setContador(contador +1) : setContador(contador -1)
    }
    const handleClickReset = () => {
        setContador(0);
    }
    const isEven = contador % 2 === 0

    return (
        <div>
            <h1>El valor del contador</h1>
            <Counter number={contador} />
            <p>{isEven ? "Es par" : "Es impar"}</p>
            <button onClick = {() => {handleClick(true)}}
            >Incrementar</button>
            <button onClick={handleClickReset}>Reset</button>
        </div>
            );
        };

    

    
    ReactDOM.render(<App/>,rootElement);

    