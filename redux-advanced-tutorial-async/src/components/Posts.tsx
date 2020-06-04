import React, { FC } from 'react'

import { Post } from '../services/reddit/models'

export type PostsProps = {
    posts: Post[]
}

const Posts: FC<PostsProps> = ({
    posts,
}) => {
    console.log("posts", posts)

    return (
        <ul>
            {posts.map((post, i) =>
                (<li key={i}>{post.title}</li>)
            )}
        </ul >
    )
}

export default Posts
