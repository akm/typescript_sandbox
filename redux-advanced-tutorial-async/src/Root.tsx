import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import App from './containers/App';

const Root: FC = () => (
    <Switch>
        <Route path="/:subreddit" component={App} />
        <Redirect to="/reactjs" />
    </Switch>
)

export default Root
