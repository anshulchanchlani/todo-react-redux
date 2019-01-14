import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import data from './db'
import {Provider} from 'react-redux';
import reducers from './reducers';

let store = createStore(reducers,data.anshul)

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