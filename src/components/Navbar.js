import React  from 'react';
import '../styles/Navbar.css';
function Navbar(props) {

    return (
        <nav className="stub">
            <ul className="stub" >
                <li className="nav_item"><a href="/#" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="/ambulances" className="nav_link">Kinematics</a></li>
                <li className="nav_item"><a href="/patients" className="nav_link">Statics</a></li>
                <li className="nav_item"><a href="/users" className="nav_link">Dynamics</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;