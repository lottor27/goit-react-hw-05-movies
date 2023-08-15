import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Button = ({ children, handleClick }) => {
  const location = useLocation();
  

  if (location.state !== null) {
    const serializedLocal = JSON.stringify(location);
    localStorage.setItem('searchQuery', serializedLocal);
  }

 
 const wrightLocation = JSON.parse(localStorage.getItem('searchQuery'));
  
    
  console.log(wrightLocation);
    //   if (location.state !== null) {
    //   const panick = JSON.stringify(location.state.from);
    //   console.log(panick);
    // }
const fromLocation = wrightLocation.state?.from;
    // console.log(fromLocation);
    console.log(location);
  // console.log(fromLocation);

  

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