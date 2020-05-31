import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as ActionTypes from '../actions/types';
import { getPosts } from '../actions';
import { getPostsFactory } from '../services/reddit/api';

export default function* rootSaga() {
    yield all([fork(watchGetPosts)]);
}

export function* watchGetPosts() {
    yield takeLatest(ActionTypes.REDDIT_GET_POSTS_START, runGetPosts);
}

function* runGetPosts(action: ReturnType<typeof getPosts.start>) {
    const { subreddit } = action.payload.params;
    try {
        const api = getPostsFactory();
        const posts = yield call(api, subreddit);
        yield put(getPosts.succeed({ subreddit }, { posts }));
    } catch (error) {
        yield put(getPosts.fail({ subreddit }, error));
    }
}
