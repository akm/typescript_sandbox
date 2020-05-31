import React from 'react';

import { Post } from '../services/reddit/models'
import PostsComponent from '../components/Posts'

const dummyPosts: Post[] = [
    { title: 'foo' },
    { title: 'bar' },
    { title: 'baz' },
]

const Posts = () => (
    <PostsComponent posts={dummyPosts} />
)

export default Posts
