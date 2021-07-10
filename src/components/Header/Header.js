import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <h1>Team Creator</h1>
            {/* nav links here */}
            <nav>
                <a href="/team">Team</a>
                <a href="/selected">Home</a>
                <a href="/payment">Payment</a>
            </nav>
        </div>
    );
};

export default Header;