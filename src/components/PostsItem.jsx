import React from 'react';
import Button from './UI/button';

const PostsItem = (props) => (
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

export default PostsItem;
