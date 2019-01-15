import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';

let store = createStore(reducers,applyMiddleware(promiseMiddleware))

export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
            
                <App/>
            </Provider>
        );
    }
}
ReactDOM.render(<Root/>,document.getElementById("app"))