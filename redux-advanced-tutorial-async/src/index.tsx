import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { createLogger } from 'redux-logger'

import reducer from './reducers';
import rootSaga from './sagas/reddit';
import Root from './Root';

import './index.css';

const sagaMiddleWare = createSagaMiddleware();
const middlewares = [sagaMiddleWare, createLogger()]
const store = createStore(reducer, applyMiddleware(...middlewares));

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
