import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Button = ({ children, handleClick }) => {
    const location = useLocation();
    const fromLocation = location.state?.from;

    return (
        <div >
            <Link to={fromLocation || '/'} onClick={handleClick} >
           {children}
            </Link></div>
    )
}

export default Button;