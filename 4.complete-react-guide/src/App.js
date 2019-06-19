import React, { Component } from 'react';
import './App.css';
import FunctionalComponent from './FunctionalComponents/FunctionalComponent'
import Person from './Person/Person'

class App extends Component {
  state = {
     persons: [ {
           name:'Maxum',
           age: 3
        }  
     ]
     
  }

  // change state data through button click event 

  happyBirthDay = () => {
    console.log('happyBirthDay')
    // DONT DO THIS 
    //this.state.persons[0].age = 4
    this.setState({
      persons: [
        {
          name: 'Max',
          age: 4
        }
      ]
    })

  }
  

  render() {
    return (
      <div className="App">
          <h1>Hello React...!</h1>
          <FunctionalComponent></FunctionalComponent>
          <Person name="Raja" age="28">
                <ol>
                  <li>My Hobbies</li>
                  <li>Cricket</li>
                  <li>Running</li>
                  <li>Sana Bina</li>
                </ol>
            
          </Person>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <button onClick={this.happyBirthDay}>Happy BirthDay</button>
           <hr></hr>
          <a href="https://reactjs.org/docs/events.html#supported-events" target="_blank">React Events</a>
      </div>
      // react will convert above code into below
      /*
       React.createElement('div',{className: App}, React.createElement('h1'),null, 'Hello React...!')

       */
    );
  }
}

export default App;


// This is our root react class based component. It's stateful, smart, conatainers
