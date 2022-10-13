import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxForm from "./AppForm";
import reducer from './reducer';

// Store Redux
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() && composeWithDevTools());

const IndexReduxForm = () => {
    return (
        // Provider dari redux dengan store
        <Provider store={store}>
            <ReduxForm />
        </Provider>
    )
}

export default IndexReduxForm