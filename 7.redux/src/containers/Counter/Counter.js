import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5ounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>STORE RESULTS</button>
                <ul>
                    {
                        this.props.storedResults.map(storedResult => {
                           return <li key={storedResult.id} 
                                   onClick={() => this.props.onDeleteResult(storedResult.id)}> 
                                   {storedResult.value} 
                                 </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

// here we are getting data from central store(reducers.js) into this component
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}
//dispatch actions from component.
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAdd5Counter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtract5ounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, deleteId: id})
    };

}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);