import React, { FC } from 'react';
import { connect } from 'react-redux';

import PostsComponent, { PostsProps } from '../components/Posts'
import { RedditState, initialState } from '../reducers';

type StateProps = PostsProps

const mapStateToProps = (state: RedditState = initialState): StateProps => ({
    posts: state.posts,
})

const Posts: FC<StateProps> = ({ posts }) => (
    <PostsComponent posts={posts} />
)

export default connect(mapStateToProps)(Posts)
