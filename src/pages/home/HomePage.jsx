import React from 'react';
import { useNavigate } from "react-router-dom"; 


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => navigate('/profile')}>Profile</button>
        </div>
    );
}

export default HomePage;
