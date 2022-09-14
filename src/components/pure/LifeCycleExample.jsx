import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Los constructores están pensados solo para inicializar variables

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('Aquí se instancia el componente del constructor')
    }

    componentWillMount() {
        console.log('WILLMOUNT: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo al terminar el montaje del componente antes de renderizarlo en la vista -- peticiones here')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: si va a recibir nuevas props')
    }

    shouldComponentUpdate() {
        // controla si el componente debe o no actualizarse
        // return true or false
    }

    componentWillUpdate() {
        console.log('WILLUPDATE: justo antes de actualizarse')
    }

    componentDidUpdate() {
        console.log('DIDUPDATE: justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: justo antes de desaparecer')
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
