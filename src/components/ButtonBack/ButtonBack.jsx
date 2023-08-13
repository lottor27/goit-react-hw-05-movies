import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Button = ({ children, handleClick }) => {
    const location = useLocation();
    const fromLocation = location.state?.from;

    return (
      <div>
        <Link
          to={fromLocation || '/inTrend' || '/movies'}
          onClick={handleClick}
          className="btn btn-outline-secondary"
        >
          {children}
        </Link>
      </div>
    );
}

export default Button;