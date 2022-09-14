import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                age: 41
            }

    
    }
    render() {
        return (
            <div>
              <h1>¡Hola { this.props.name } desde un componente clase!</h1>  
              <h2>Tu edad es { this.state.age }</h2>
              <div>
                  <button onClick={this.birthday}>
                      Un año más
                  </button>
              </div>
            </div>
        );
    };

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }

}


Greeting.propTypes = {
name: PropTypes.string
};


export default Greeting;
