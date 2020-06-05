import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';

import AppComponent, { AppProps } from '../components/App'
import { RedditState, initialState } from '../reducers';
import { getPosts, selectSubreddit } from '../actions';

type StateProps = Pick<AppProps, 'lastUpdatedAt' | 'isLoading'>

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

type EnhancedProps =
    StateProps & DispatchProps &
    RouteComponentProps<{ subreddit: string }>;

const App: FC<EnhancedProps> = ({
    handleChangeSubreddit,
    getPostsStart,
    history,
    match,
    ...rest
}) => {
    const subreddit = match.params.subreddit
    console.log("containers/App.tsx subreddit", subreddit)
    console.log("containers/App.tsx rest", rest)

    useEffect(() => {
        getPostsStart(subreddit);
    }, [subreddit]);

    const props = {
        subreddit,
        onRefreshClick: () => getPostsStart(subreddit),
        onChangeSubreddit: (val: string) => history.push("/" + val),
        ...rest
    }

    return <AppComponent {...props} />
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
