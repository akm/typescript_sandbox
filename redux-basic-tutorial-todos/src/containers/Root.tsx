import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from '../components/App'
import Provider from './Provider'
import { AppStore } from '../store'

const Root = ({ store }: { store: AppStore }) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
)

export default Root
