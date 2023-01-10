import React from 'react';
import PostsItem from './PostsItem';

const PostsList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) => (
                <PostsItem number={index + 1} post={post} key={post.id} remove={remove} />
            ))}
        </div>
    );
};

export default PostsList;