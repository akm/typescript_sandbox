import { AxiosError } from 'axios';
import { Post } from '../services/reddit//models'

export const REDDIT_GET_POSTS_START = "REDDIT/GET_POSTS_START"
export const REDDIT_GET_POSTS_SUCCEED = "REDDIT/GET_POSTS_SUCCEED"
export const REDDIT_GET_POSTS_FAIL = "REDDIT/GET_POSTS_FAIL"

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'


export interface GetPostsParams {
    subreddit: string;
}
export interface GetPostsResult {
    posts: Post[];
}

export type getPostsStart = {
    type: typeof REDDIT_GET_POSTS_START;
    payload: {
        params: GetPostsParams,
    };
}

export type getPostsSucceed = {
    type: typeof REDDIT_GET_POSTS_SUCCEED
    payload: {
        params: GetPostsParams,
        result: GetPostsResult,
    }
}

export type getPostsFail = {
    type: typeof REDDIT_GET_POSTS_FAIL
    payload: {
        params: GetPostsParams,
        error: AxiosError,
    }
    error: true,
}

export const getPosts = {
    start: (params: GetPostsParams): getPostsStart => (
        { type: REDDIT_GET_POSTS_START, payload: { params } }
    ),

    succeed: (params: GetPostsParams, result: GetPostsResult): getPostsSucceed => (
        { type: REDDIT_GET_POSTS_SUCCEED, payload: { params, result } }
    ),

    fail: (params: GetPostsParams, error: AxiosError): getPostsFail => (
        { type: REDDIT_GET_POSTS_FAIL, payload: { params, error }, error: true }
    ),
}

export type selectSubreddit = {
    type: typeof SELECT_SUBREDDIT;
    subreddit: string;
}

export const selectSubreddit = (subreddit: string): selectSubreddit => (
    { type: SELECT_SUBREDDIT, subreddit }
)
