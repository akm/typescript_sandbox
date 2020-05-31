import React from 'react'

import { Post } from '../services/reddit/models'

export type PostsProps = {
    posts: Post[]
}

const Posts = (props: PostsProps) => (
    <ul>
        {props.posts.map((post, i) =>
            (<li key={i}>{post.title}</li>)
        )}
    </ul >
)

export default Posts
