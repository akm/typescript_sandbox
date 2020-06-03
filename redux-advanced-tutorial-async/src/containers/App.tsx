import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AppComponent, { AppProps } from '../components/App'
import { RedditState, initialState } from '../reducers';
import { getPosts, selectSubreddit } from '../actions';

type StateProps = Pick<AppProps, 'subreddit' | 'lastUpdatedAt' | 'isLoading'>

const mapStateToProps = (state: RedditState = initialState): StateProps => state;

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
    handleChangeSubreddit,
    getPostsStart,
    subreddit,
    ...rest
}) => {
    useEffect(() => {
        getPostsStart(subreddit);
    }, [subreddit]);

    const props = {
        subreddit,
        onRefreshClick: () => getPostsStart(subreddit),
        onChangeSubreddit: handleChangeSubreddit,
        ...rest
    }

    return <AppComponent {...props} />
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
