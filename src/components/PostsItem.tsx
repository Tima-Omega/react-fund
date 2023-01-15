import React, { FC } from 'react';
import Button from 'components/ui/button';
import { Post } from '../types/Post';
import { RemovePostFn } from '../types/RemovePostFn';

interface PostItemProps {
    number: number;
    post: Post;
    remove: RemovePostFn;
}

const PostsItem: FC<PostItemProps> = (props) => {
    return (
        <div className="posts">
            <div className="content">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <div className="body">{props.post.body}</div>
            </div>
            <div className="btns">
                <Button onClick={() => props.remove(props.post)}>Удалить</Button>
            </div>
        </div>
    );
};

export default PostsItem;
