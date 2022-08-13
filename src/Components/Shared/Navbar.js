import React from 'react';
import image from '../../Assets/Logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbar-class">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={image} alt="" width="70" height="40" class="d-inline-block align-text-top"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                        <a class="nav-link " aria-current="page" href="#">Wedding Cards</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Birthday Cards</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Feeling Cards</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Anneversary Cards</a>
                        </li>
                    </ul>
                     <div className="list-unstyled d-flex">
                     <li class="nav-item">
                        <a class="nav-link border-end border-dark" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SignUp</a>
                    </li>
                     </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;