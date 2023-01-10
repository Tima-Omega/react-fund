import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

const App = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'desc' },
        { id: 2, title: 'js 2', body: 'desc' },
        { id: 3, title: 'js 3', body: 'desc' },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    console.log(posts);
    return (
        <>
            <div className="app">
                <PostForm create={createPost} />
                {posts.length ? (
                    <PostsList posts={posts} remove={removePost} title="Посты" />
                ) : (
                    <h1>Нет ничего</h1>
                )}
            </div>
        </>
    );
};

export default App;
