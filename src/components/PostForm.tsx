import React, { FC, MouseEventHandler, useCallback, useState } from 'react';
import Button from 'components/ui/button';
import Input from 'components/ui/input';
import { Post } from '../types/Post';
import { CreatePostFn } from '../types/CreatePostFn';

interface PostFormProps {
    create: CreatePostFn;
}

export const PostForm: FC<PostFormProps> = ({ create }) => {
    const [post, setPost] = useState<Omit<Post, 'id'>>({ title: '', body: '' });

    const addNewPost: MouseEventHandler<HTMLButtonElement> = useCallback(
        (e) => {
            e.preventDefault();

            if (!post.title || !post.body) {
                return;
            }
            const newPost = {
                ...post,
                id: Date.now(),
            };
            create(newPost);
            setPost({ title: '', body: '' });
        },
        [post, create],
    );
    return (
        <div>
            <form>
                <Input
                    type="text"
                    placeholder="Название поста"
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: (e.target as HTMLInputElement).value })
                    }
                />
                <Input
                    type="text"
                    placeholder="Описание поста"
                    value={post.body}
                    onChange={(e) =>
                        setPost({ ...post, body: (e.target as HTMLInputElement).value })
                    }
                />
                <Button onClick={addNewPost}>Создать пост</Button>
            </form>
        </div>
    );
};
