import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AppComponent, { AppProps } from '../components/App'
import { RedditState, initialState } from '../reducers';
import { getPosts, selectSubreddit } from '../actions';

type StateProps = {
    subreddit: AppProps['subreddit'];
    lastUpdatedAt?: AppProps['lastUpdatedAt'];
    isLoading: AppProps['isLoading'];
}

const mapStateToProps = (state: RedditState = initialState): StateProps => ({
    subreddit: state.subreddit,
    isLoading: state.isLoading,
    lastUpdatedAt: state.lastUpdatedAt,
})

interface DispatchProps {
    getPostsStart: (subreddit: string) => void;
    handleChangeSubreddit: AppProps['onChangeSubreddit'];
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators(
    {
        getPostsStart: (subreddit: string) => getPosts.start({ subreddit }),
        handleChangeSubreddit: (subreddit: string) => selectSubreddit(subreddit),
    },
    dispatch
);

const App: FC<StateProps & DispatchProps> = ({
    subreddit,
    isLoading,
    lastUpdatedAt,
    handleChangeSubreddit,
    getPostsStart,
}) => {
    useEffect(() => {
        getPostsStart(subreddit);
    }, [subreddit]);

    const props = {
        subreddit, isLoading, lastUpdatedAt,
        onRefreshClick: () => getPostsStart(subreddit),
        onChangeSubreddit: handleChangeSubreddit,
    }

    return <AppComponent {...props} />
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
