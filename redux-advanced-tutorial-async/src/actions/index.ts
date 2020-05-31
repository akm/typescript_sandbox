import { AxiosError } from 'axios';
import { Post } from '../services/reddit//models'
import * as types from './types'

export interface GetPostsParams {
    subreddit: string;
}
export interface GetPostsResult {
    posts: Post[];
}

export type getPostsStart = {
    type: typeof types.REDDIT_GET_POSTS_START;
    payload: {
        params: GetPostsParams,
    };
}

export type getPostsSucceed = {
    type: typeof types.REDDIT_GET_POSTS_SUCCEED
    payload: {
        params: GetPostsParams,
        result: GetPostsResult,
    }
}

export type getPostsFail = {
    type: typeof types.REDDIT_GET_POSTS_FAIL
    payload: {
        params: GetPostsParams,
        error: AxiosError,
    }
    error: true,
}

export const getPosts = {
    start: (params: GetPostsParams): getPostsStart => (
        { type: types.REDDIT_GET_POSTS_START, payload: { params } }
    ),

    succeed: (params: GetPostsParams, result: GetPostsResult): getPostsSucceed => (
        { type: types.REDDIT_GET_POSTS_SUCCEED, payload: { params, result } }
    ),

    fail: (params: GetPostsParams, error: AxiosError): getPostsFail => (
        { type: types.REDDIT_GET_POSTS_FAIL, payload: { params, error }, error: true }
    ),
}

export type selectSubreddit = {
    type: typeof types.SELECT_SUBREDDIT;
    subreddit: string;
}

export const selectSubreddit = (subreddit: string): selectSubreddit => (
    { type: types.SELECT_SUBREDDIT, subreddit }
)

export type Actions =
    getPostsStart |
    getPostsSucceed |
    getPostsFail |
    selectSubreddit
