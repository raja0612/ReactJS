import React from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'
 
class OrderSummary extends React.Component {

    componentWillUpdate () {
        console.log('order summary componentWillUpdate')
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map( igKey => {
            return <li key={igKey}> {igKey} : {this.props.ingredients[igKey]}  </li>
        })
        return (
            <Aux>
            <p>Your Order</p>
            <ul>
             {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p><strong>PRICE: {this.props.price.toFixed(2)}</strong></p>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={this.props.closeModal}>CANCEL</Button>
       </Aux>

        );
    }
}

export default OrderSummary;