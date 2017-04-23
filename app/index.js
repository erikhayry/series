import 'babel-polyfill'
import React from 'react'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
