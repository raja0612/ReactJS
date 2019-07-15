import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationsItems from '../../Navigation/NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import AUX from '../../../hoc/Aux/Aux'

const sideDrawer = (props) => {
  let attachedClasses =[classes.SideDrawer, classes.Close];
    if(props.open) {
      attachedClasses =[classes.SideDrawer, classes.Open];
    }
    return (
      <AUX>
        <Backdrop show={props.open} backdropClicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
         <div className={classes.Logo}>
          <Logo />
          </div>
          <nav>
            <NavigationsItems></NavigationsItems>
          </nav>
        </div>
        </AUX>
    );
}

export default sideDrawer;