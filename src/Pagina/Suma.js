import React, { useState } from "react";
import OSuma from "../componentes/OperarSuma";

function Sum() {
    const[num1,setNum1] = useState(0);
    const[num2,setNum2] = useState(0);
    const[mostrarResultado, setMostrarResultado] = useState(false);

    function manejarOperacion(){
        setMostrarResultado(true);
    }
    return(
        <div class="container">
        
            <div class="row justify-content-center">
                <div class="col-auto card">
            <h1>Calculadora</h1>
            
            <input class="form-control"
                type="txt"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                placeholder="Ingrese un Numero"
            />
            <input class="form-control"
                type="text"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                placeholder="Ingrese un Numero"
            />
            <button class="btn btn-primary mb-3" onClick={manejarOperacion}>Operar</button>
            {mostrarResultado && (
                <OSuma num1={num1} num2={num2} />
            )}
            </div>
            </div>
            </div>
    );
}

export default Sum;