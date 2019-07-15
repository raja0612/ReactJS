import React from 'react'
import classes from './Modal.css'
import AUX from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
        console.log('see BurgerBuilder.js compoenent, there we wrap order summary')
        console.log('in modal component, when modal show value is changed then only we need to update oreder summary ')
        console.log('if you comment out this method, you will see  console.log(order summary componentWillUpdate)')
        console.log('every time when adding ingredients i.e order summary component will re render every time')
        return nextProps.show !== this.props.show
    }
    render(){
        return(
        <AUX>
            <Backdrop show={this.props.show}  backdropClicked={this.props.closeModal}/>
    
            <div className={classes.Modal}
            style={ {transform: this.props.show ? 'translateY(0)': 'translateY(-100VH)',
            opacity:this.props.show ? '1': '0'}}
            >
            {this.props.children}
            </div>
    
        </AUX>
        );
    }
    
}

export default Modal;