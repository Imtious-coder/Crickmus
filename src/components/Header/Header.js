import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-light Header">
            <div class="container-fluid">
                <p class="navbar-brand mb-0 h1">Crick<span style={{color:"red"}}>mus</span></p>
            </div>
        </nav>
    );
};

export default Header;