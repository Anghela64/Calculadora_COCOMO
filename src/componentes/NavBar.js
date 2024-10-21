import React from "react";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Home from "../Pagina/Home";
import PagCocomo from '../Pagina/PagCocomo';
import PagDel from '../Pagina/PagDel';



function NavBar() {
    return(
      <Router>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CALCULADORA DE COSTOS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a><Link to="/" className="dropdown-item">HOME__</Link></a>
        </li>
        <li className="nav-item">
          <a><Link to="/PagCocomo" className="dropdown-item">COCOMO__</Link></a>
        </li>
        <li className="nav-item">
          <a><Link to="/PagDel" className="dropdown-item">MODELO Delphi__</Link></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MIS REDES SOCIALES
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="http://www.facebook.com">Facebook</a></li>
            <li><a className="dropdown-item" href="http://www.youtube.com">YouTube</a></li>
            <li><a className="dropdown-item" href="http://www.twitter.com">X</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/PagCocomo" element={<PagCocomo/>}/>
                    <Route path="/PagDel" element={<PagDel/>}/>
                </Routes>

</Router>
    )
}



export default NavBar;

