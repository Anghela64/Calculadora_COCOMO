import React from "react";
import gatoBanana from "../src/Imagen/gatoBanana.png";
import gato from "../src/Imagen/gato.jpg";
import fractura from "../src/Imagen/fractura.jpg";
import "../src/css/HomeCss.css";

function Principal() {
    return(
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="card11" style={{width: '18rem'}}>
                        <img src={gatoBanana} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card1">Some quick example text to build
                                on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                <div class="card11" style={{width: '18rem'}}>
                        <img src={gato} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card2">Some quick example text to build
                                on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                <div class="card11" style={{width: '18rem'}}>
                        <img src={fractura} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <p class="card3">Some quick example text to build
                                on the card title and make up the bulk of the card's content.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Principal;