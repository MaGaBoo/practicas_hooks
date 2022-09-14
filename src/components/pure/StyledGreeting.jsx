import React, { useState } from 'react';

// Ejemplo de definición de styles en constantes

const loggedStyle = {
    color: '#255C99'
};

const unloggedStyle = {
    color: '#F487B6',
    fontWeight: 'bold'
}

const StyledGreeting = (props) => {

    // Generamos un estado para controlar si el user está logeado o no

const [logged, setLogged] = useState(false);

const greetingUser = () => (<p>Holi, {props.name}</p>);
const pleaseLogin =  () => (<p>Tienes que logarte, amigui</p>)

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
        { logged ?  greetingUser() : pleaseLogin()}
           
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default StyledGreeting;
