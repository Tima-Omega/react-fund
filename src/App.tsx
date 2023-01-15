import { useState, useMemo } from 'react';
import PostFilter from 'components/PostFilter';
import { PostForm } from 'components/PostForm';
import PostsList from 'components/PostsList';
import Modal from 'components/ui/modal';
import Button from 'components/ui/button';
import { CreatePostFn } from './types/CreatePostFn';
import { RemovePostFn } from './types/RemovePostFn';
import { Filter } from './types/Filter';

const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'desc' },
        { id: 2, title: 'js 2', body: 'desc' },
        { id: 3, title: 'js 3', body: '1' },
    ]);

    const [filter, setFilter] = useState<Filter>({ sortKey: 'id', query: '' });

    const sortedPosts = useMemo(() => {
        if (filter.sortKey) {
            return [...posts].sort((a, b) =>
                a[filter.sortKey].toString().localeCompare(b[filter.sortKey].toString()),
            );
        }
        return posts;
    }, [filter.sortKey, posts]);

    const sortedAndSearched = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost: CreatePostFn = (newPost) => {
        setPosts([...posts, newPost]);
        setShow(false);
    };

    const removePost: RemovePostFn = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const [show, setShow] = useState(false);

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
