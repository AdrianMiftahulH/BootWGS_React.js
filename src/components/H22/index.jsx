import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppIncrement from "./AppIncrement";
import reducer from './reducer'


let store = createStore(reducer)

const IndexIncrement = () => {
    return (
        <Provider store={store}>
            <AppIncrement />
        </Provider>
    )
}

export default IndexIncrement