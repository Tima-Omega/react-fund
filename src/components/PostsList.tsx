import type { FC } from 'react';

import type { Post } from '../types/Post';
import type { RemovePostFn } from '../types/RemovePostFn';
import PostsItem from './PostsItem';

interface PostsListProps {
    posts: Post[];
    remove: RemovePostFn;
    title: string;
}

const PostsList: FC<PostsListProps> = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1>Нет постов</h1>;
    }

    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostsItem number={index + 1} post={post} key={post.id} remove={remove} />)}
        </div>
    );
};

export default PostsList;
