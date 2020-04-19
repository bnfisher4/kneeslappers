import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <span className='logo'>KNEESLAPPERS</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/' className='NavBar-link' >CATEGORIES</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {props.user.name} </span>
        </div>
        :
        <div>
            <Link to='/' className='NavBar-link'>KNEESLAPPERS</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;