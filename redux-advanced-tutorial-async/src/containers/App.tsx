import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AppComponent, { AppProps } from '../components/App'
import { RedditState, initialState } from '../reducers';
import { getPosts } from '../actions';

type StateProps = {
    subreddit: string;
    lastUpdatedAt?: Date;
    isLoading: boolean;
}

const mapStateToProps = (state: RedditState = initialState): StateProps => ({
    subreddit: state.subreddit,
    isLoading: state.isLoading,
    lastUpdatedAt: state.lastUpdatedAt,
})

interface DispatchProps {
    getPostsStart: (subreddit: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators(
    {
        getPostsStart: (subreddit: string) =>
            getPosts.start({ subreddit }),
    },
    dispatch
);

const App: FC<StateProps & DispatchProps> = ({
    subreddit,
    isLoading,
    lastUpdatedAt,
    getPostsStart,
}) => {
    useEffect(() => {
        getPostsStart(subreddit);
    }, []);

    const handleRefreshClick = () => {
        getPostsStart(subreddit)
    }

    return <AppComponent
        subreddit={subreddit}
        isLoading={isLoading}
        lastUpdatedAt={lastUpdatedAt}
        onRefreshClick={ handleRefreshClick }
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
