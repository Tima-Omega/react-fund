import React, { useState, useMemo } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'desc' },
        { id: 2, title: 'js 2', body: 'desc' },
        { id: 3, title: 'js 3', body: '1' },
    ]);

    // const [selectedSort, setSelectedSort] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');

    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearched = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <>
            <div className="app">
                <PostForm create={createPost} />
                <PostFilter filter={filter} setFilter={setFilter} />
                <PostsList posts={sortedAndSearched} remove={removePost} title="Посты" />
            </div>
        </>
    );
};

export default App;
