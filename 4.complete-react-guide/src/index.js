import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); 
registerServiceWorker();


// here we are importing our root react component App and rendering with ReactDOM.render()
// in index.html we have an html div element with id ="root" will be replaced by App component JSX code.
