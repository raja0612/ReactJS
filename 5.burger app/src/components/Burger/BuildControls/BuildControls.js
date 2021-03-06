import React from 'react'
import BuildControl from './BuildControl'
import classes from './BuildControls.css'

const controls = [
                  {label:"Salad", type:"salad"},
                  {label:"Bacon",  type:"bacon"},
                  {label:"Meat", type:"meat"},
                  {label:"Cheese", type:"cheese"}
]  ;

const buildControls = (props) => {

   return (
    <div className={classes.BuildControls}>
        <p><strong>Current Price : {props.price.toFixed(2)}</strong></p>
         {controls.map(ctrl => (
           <BuildControl 
           key={ctrl.label} 
           label={ctrl.label}  
           added={ () => props.ingredientAdded(ctrl.type)}
           removed={ () => props.ingredientRemoved(ctrl.type)}
           disabled={props.disabledInfo[ctrl.type]}
           />
         ))}
          <button 
          disabled={props.purchasable}
          className={classes.OrderButton}
          onClick={props.showModal}
          >
          ORDER NOW
          </button>
    </div>
   
   );

}


export default buildControls;