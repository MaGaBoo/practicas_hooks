import React from 'react';
import { useNavigate } from "react-router-dom"; 

const Profile = ({user}) => {
    const navigate = useNavigate();

    function goTasks() {
        navigate('/tasks')
    }
    
    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={ goTasks }>Tasks</button>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
}

export default Profile;
