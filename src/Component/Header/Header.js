import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Header = () => {
    const { user, handlesingout } = useFirebase();
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/order">Order</Link>
                <Link to="/register">Register</Link>
                <span>{user?.displayName && user.displayName} </span>
                {
                    user?.uid
                        ?
                        <button onClick={handlesingout}>Sing out</button>
                        :
                        <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;