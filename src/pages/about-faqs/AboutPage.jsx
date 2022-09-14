import React from 'react';
import { useLocation, useNavigate } from "react-router-dom"; 

const AboutPage = () => {

    const location = useLocation();
    console.log('We are in route:', location.pathname)
    const navigate =useNavigate()
    


    return (
        <div>
            <h1>About</h1>
            <div>
                <button onClick={() => navigate('/') }>Go to home</button>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        </div>
    );
}
 
export default AboutPage;
