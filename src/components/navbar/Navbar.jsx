import React from 'react';
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar_container">
            <div className="btn_container">
                <button className="runtime_btn">Runtime</button>
                <button className="constructor_btn">Constructor</button>
            </div>
        </div>
    );
}

export default Navbar;
