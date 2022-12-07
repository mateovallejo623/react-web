import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav>
            <ul className="user">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/favoritos'}>Favoritos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar