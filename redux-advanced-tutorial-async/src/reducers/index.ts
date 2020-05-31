import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { Actions } from '../actions';
import * as ActionTypes from '../actions/types';
import { Post } from '../services/reddit/models';

export interface RedditState {
    subreddit: string;
    posts: Post[];
    isLoading: boolean;
    lastUpdatedAt?: Date;
    error?: AxiosError | null;
}
export const initialState: RedditState = {
    subreddit: "reduxjs",
    posts: [],
    isLoading: false,
};

const redditReducer: Reducer<RedditState, Actions> = (
    state: RedditState = initialState,
    action: Actions,
): RedditState => {
    switch (action.type) {
        case ActionTypes.REDDIT_GET_POSTS_START:
            return {
                ...state,
                posts: [],
                isLoading: true
            }
        case ActionTypes.REDDIT_GET_POSTS_SUCCEED:
            return {
                ...state,
                posts: action.payload.result.posts,
                isLoading: false,
                error: null,
            }
        case ActionTypes.REDDIT_GET_POSTS_FAIL:
            return {
                ...state,
                posts: [],
                isLoading: false,
                error: action.payload.error,
            }
        case ActionTypes.SELECT_SUBREDDIT:
            return {
                ...state,
            }
    }
}

export default redditReducer;
