import React, { FC } from 'react';
import { connect } from 'react-redux';

import AppComponent, { AppProps } from '../components/App'
import { RedditState, initialState } from '../reducers';

type StateProps = AppProps

const mapStateToProps = (state: RedditState = initialState): StateProps => ({
    subreddit: state.subreddit,
    isLoading: state.isLoading,
    lastUpdatedAt: state.lastUpdatedAt,
})

const App: FC<StateProps> = ({
    subreddit,
    isLoading,
    lastUpdatedAt,
}) => (
        <AppComponent
            subreddit={subreddit}
            isLoading={isLoading}
            lastUpdatedAt={lastUpdatedAt} />
    )

export default connect(mapStateToProps)(App)
