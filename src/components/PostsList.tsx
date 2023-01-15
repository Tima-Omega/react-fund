import React, { FC } from 'react';
import PostsItem from './PostsItem';
import { Post } from '../types/Post';
import { RemovePostFn } from '../types/RemovePostFn';

interface PostsListProps {
    posts: Post[];
    remove: RemovePostFn;
    title: string;
}

const PostsList: FC<PostsListProps> = ({ posts, title, remove }) => {
    if (!posts.length) return <h1>Нет постов</h1>;
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
