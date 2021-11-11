import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark mb-5">
            <div className="container-fluid pt-2">
                
                <img src={require("../images/logo ijo.svg").default} class="img-fluid gambar" alt="logo" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex position-absolute end-0" id="navbarNavAltMarkup">
                    <div className="d-flex justify-content-between">
                        <li className="nav-link texts mx-3" aria-current="page">HOME</li>
                        <li className="nav-link texts mx-3">About</li>
                        <li className="nav-link texts mx-3">FAQ</li>
                        <li className="btn login mx-5">Log In</li>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;