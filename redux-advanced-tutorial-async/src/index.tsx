import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger'

import reducer from './reducers';
import rootSaga from './sagas/reddit';
import Root from './Root';

import './index.css';

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
        typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
/* eslint-enable */

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare, createLogger()]
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Root />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

sagaMiddleWare.run(rootSaga);
