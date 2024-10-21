import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

function Home() {
    return(
        <>
            <p>mi pagina principal</p>
        </>
    )
}

function OtraPagina() {
    return(
        <>
            <p>mi pagina secundaria</p>
        </>
    )
}

function P_Link() {
    return(
            <Router>
                <h1>MIS ENLACES</h1>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/PagSec">MI PAGINA SECUNDARIA</Link></li>
                    <li><a href="http://www.youtube.com">ir a youtube</a></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/PagSec" element={<OtraPagina/>}/>
                </Routes>
            </Router>
    )
}

export default P_Link;