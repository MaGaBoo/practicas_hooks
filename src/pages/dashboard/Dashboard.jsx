import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import MenuListItems from '../../components/pure/MenuListItems';

const Dashboard = () => {

const navigate = useNavigate();

const logout = () => {
    navigate('/login')
}
const register = () => {
    navigate('/register')

}
    return (
        <div>
            <Button variant='contained' onClick={() => logout()}>Logout</Button>
            <Button variant='contained' onClick={() => register()}>Register</Button>
           {/*  <MenuListItems /> */}
            <Copyright />
        </div>
    );
}

export default Dashboard;
