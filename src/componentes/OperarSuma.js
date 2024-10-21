
import React, { useState } from "react";

function CalculadoraCOCOMO() {
    const [loc, setLoc] = useState(0);
    const [esfuerzo, setEsfuerzo] = useState(null);
    const [tiempoDesarrollo, setTiempoDesarrollo] = useState(null);
    const [personal, setPersonal] = useState(null);
    const [productividad, setProductividad] = useState(null);
    const [costo, setCosto] = useState(null);

    const calcularCOCOMO = () => {
        

        // Esfuerzo (personas-mes)
        const LOC = loc / 1000;
        const ESF = 39 * Math.pow(LOC, 1.12);

        // Tiempo de desarrollo (meses)
        const TDES = 2.5 * Math.pow(ESF, 0.35);

        // Personal necesario
        const CP = ESF / TDES;

        // Productividad estimada
        const P = loc / ESF; // L = ML * 1000 para obtener las líneas de código

        // Costo estimado (en Bs)
        const CHM = 3070.60; // Puedes cambiar este valor por el costo por persona-mes
        const C = ESF * CHM;

        // Establecer los estados
        setEsfuerzo(ESF.toFixed(2));
        setTiempoDesarrollo(TDES.toFixed(2));
        setPersonal(CP.toFixed(2));
        setProductividad(P.toFixed(2));
        setCosto(C.toFixed(2));
    };

    return (
        /*<div className="calculadora-cocomo" class="card" >
            <h1>Calculadora COCOMO I</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calcularCOCOMO();
                }}
            >
                <label htmlFor="kloc">Tamaño del Proyecto (KLOC): </label>
                <input
                    type="number"
                    id="kloc"
                    value={kloc}
                    onChange={(e) => setKloc(Number(e.target.value))}
                    placeholder="Ingrese KLOC"
                /><br/>
                <button type="submit">Calcular</button>
            </form>
            {esfuerzo && (
                <div className="resultados">
                    <h3>Esfuerzo Estimado: {esfuerzo} personas-mes</h3>
                    <h3>Tiempo de Desarrollo Estimado: {tiempoDesarrollo} meses</h3>
                    <h3>Personal Requerido: {personal} personas</h3>
                    <h3>Productividad Estimada: {productividad} KLOC/persona-mes</h3>
                    <h3>Costo Estimado: {costo} Bs</h3>
                </div>
            )}
        </div>*/
        <div class="container" className="calculadora-cocomo">
        
            <div class="row justify-content-center">
                <div class="col-auto card">
                <h1>Calculadora COCOMO II</h1>
                <center><p>Tamanio del Proyecto (LOC) con Visual Studio </p></center>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    calcularCOCOMO();
                }}>
                    
                <input
                    type="number"
                    id="loc"
                    value={loc}
                    onChange={(e) => setLoc(Number(e.target.value))}
                    placeholder="Ingrese KLOC"
                />
                <br/><br></br>
            <button class="btn btn-primary mb-3" type="submit" >Calcular</button>
            </form>
            <center><h3>Esfuerzo Estimado: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    
                    <p>{esfuerzo} personas-mes</p>
                    
                </div>
            )}
            <center><h3>Tiempo de Desarrollo Estimado:</h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p>{tiempoDesarrollo} meses</p>
                    
                </div>
            )}
            <center><h3>Personal Requerido: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p>{personal} personas</p>
                    
                </div>
            )}
            <center><h3>Productividad Estimada: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p>{productividad} LOC/persona-mes</p>
                    
                </div>
            )}
            <center><h3>Costo Estimado: </h3></center>
            {esfuerzo && (
                <div className="resultados">
                    <p> {costo} Bs</p>
                </div>
            )}
            </div>
            </div>
            </div>
    );
}

export default CalculadoraCOCOMO;

