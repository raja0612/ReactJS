import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }
    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    } 

    render() {
        return (
        <div className="AddPerson">
            <div className="Person" onClick={this.props.clicked}>
                   <input type="text" 
                   placeholder="Name" 
                   onChange={this.nameChangedHandler} 
                   value={this.state.name}
                   />
                   <input type="number" 
                   placeholder="Age" 
                   onChange={this.ageChangedHandler} 
                   value={this.state.age} 
                   />
                    <h1>{this.props.name}</h1>
                    <p>Age: {this.props.age}</p>
                </div>
               <button 
               onClick={ () => this.props.personAdded(this.state.name, this.state.age)}
               >Add Person</button>
           </div>
        );
    }
    
};

export default AddPerson;