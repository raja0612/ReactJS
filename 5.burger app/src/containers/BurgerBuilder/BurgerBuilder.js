import React, {Component} from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from  '../../components/Burger/Burger'
import BuildControls  from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.3,
    meat: 0.8,
    bacon: 1
}
class BurgerBuilder extends Component {
      state = {
          ingredients : {
              salad: 0,
              cheese: 0,
              meat: 0,
              bacon: 0
          },
          price : 4,
          showModal: false
      }

      addIngredientHandler = (type) => {
          const oldCount = this.state.ingredients[type];
          const updatedCount = oldCount + 1;
          const updatedIngredients = {
            ...this.state.ingredients
          }
          updatedIngredients[type] = updatedCount;

          const priceAddition = INGREDIENT_PRICE[type]
          const oldPrice = this.state.price
          const totalPrice = oldPrice + priceAddition

          this.setState({ingredients:updatedIngredients ,price: totalPrice})
      }
      removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
          ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceSubtraction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.price
        const totalPrice = oldPrice - priceSubtraction
        this.setState({ingredients:updatedIngredients ,price: totalPrice})
          
      }
      showModal = () => {
        this.setState({showModal: true})
      }
      closeModal = () => {
        this.setState({showModal: false})
      }
      purchaseContinue = () => {
        alert('purchaseContinue')
      }


    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        const purchasable = this.state.price === 4
        return (

            <Aux>
                <Modal 
                   show={this.state.showModal}
                   closeModal={this.closeModal}
                   >
                 <OrderSummary 
                  ingredients={this.state.ingredients}
                  purchaseContinue={this.purchaseContinue}
                  closeModal={this.closeModal}
                  price={this.state.price}
                 >
                 </OrderSummary>
               </Modal> 
               <Burger ingredients={this.state.ingredients}/>
               <BuildControls 
                 ingredientAdded={this.addIngredientHandler}
                 ingredientRemoved={this.removeIngredientHandler}
                 disabledInfo={disabledInfo}
                 price={this.state.price}
                 purchasable={purchasable}
                 showModal={this.showModal}
               />
            </Aux>
        );
    }
}

export default BurgerBuilder;