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
    handleChangeSubreddit: AppProps['onChangeSubreddit'];
}

const mapStateToProps = (state: RedditState = initialState): StateProps => ({
    subreddit: state.subreddit,
    isLoading: state.isLoading,
    lastUpdatedAt: state.lastUpdatedAt,
    handleChangeSubreddit: (subreddit: string) =>
        selectSubreddit(subreddit),
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
    handleChangeSubreddit,
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
               onChangeSubreddit={ handleChangeSubreddit }
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
