import React, { useState } from 'react';
import PropTypes from 'prop-types';


const FunctionGreeting = (props) => {
    const [age, setAge] = useState(41);

    const birthday = () => {
        setAge(age + 1)
    }

    return (
        <div>
        <h1>¡Hola { props.name } desde un componente funcional!</h1>  
         <h2>Tu edad es { age }</h2>
        <div>
            <button onClick={birthday}>
                Un año más
            </button>
        </div> 
      </div>
    );
};


FunctionGreeting.propTypes = {
name: PropTypes.string,
};


export default FunctionGreeting;
