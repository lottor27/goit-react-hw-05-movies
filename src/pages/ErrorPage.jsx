import React from "react";
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    setTimeout(() => navigate('/'), 500)

    return(
        <h2>404 Not Found. <br /> Will be redicted to the home page!</h2>
    )
}

export default ErrorPage