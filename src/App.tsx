import PostFilter from 'components/PostFilter';
import { PostForm } from 'components/PostForm';
import PostsList from 'components/PostsList';
import Button from 'components/ui/button';
import Modal from 'components/ui/modal';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

import type { CreatePostFn } from './types/CreatePostFn';
import type { Filter } from './types/Filter';
import type { RemovePostFn } from './types/RemovePostFn';

const App: FC = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'desc' },
        { id: 2, title: 'js 2', body: 'desc' },
        { id: 3, title: 'js 3', body: '1' },
    ]);

    const [filter, setFilter] = useState<Filter>({ sortKey: 'id', query: '' });

    const [show, setShow] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sortKey) {
            return [...posts].sort((a, b) =>
                a[filter.sortKey].toString().localeCompare(b[filter.sortKey].toString()));
        }

        return posts;
    }, [filter.sortKey, posts]);

    const sortedAndSearched = useMemo(
        () => sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query)),
        [filter.query, sortedPosts],
    );

    const createPost: CreatePostFn = (newPost) => {
        setPosts([...posts, newPost]);
        setShow(false);
    };

    const removePost: RemovePostFn = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <>
            <PostFilter filter={filter} setFilter={setFilter} />
            <Button onClick={() => setShow(true)}>Создать пост</Button>
            <PostsList posts={sortedAndSearched} remove={removePost} title="Посты" />
            <Modal show={show} setShow={setShow}>
                <PostForm create={createPost} />
            </Modal>
        </>
    );
};

export default App;
