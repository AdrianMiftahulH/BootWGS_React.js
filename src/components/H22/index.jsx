import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import AppIncrement from "./AppIncrement";
import reducer from './reducer';

// Store Redux
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && composeWithDevTools());

const IndexIncrement = () => {
    return (
        // Provider dari redux dengan store
        <Provider store={store}>
            <AppIncrement />
        </Provider>
    )
}

export default IndexIncrement