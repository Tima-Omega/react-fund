
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import Select from './components/UI/select/Select';
import { postService } from './services/posts.service';
import { useForceUpdate } from './utils/forceUpdate';

const App = () => {
    const forceUpdate = useForceUpdate();
    const posts = postService.get();
    const createPost = (newPost) => {
        postService.add(newPost);
        forceUpdate();
    };

    const removePost = (post) => {
        postService.remove(post);
        forceUpdate();
    };

    const sortPosts = (field) => {
        postService.sort(field);
        forceUpdate();
    };

    return (
        <>
            <div className="app">
                <PostForm create={createPost} />
                <div>
                    <Select
                        onChange={sortPosts}
                        defaultValue="title"
                        options={[
                            { value: 'title', name: 'название' },
                            { value: 'body', name: 'описание' },
                        ]}
                    />
                </div>
                {posts.length
                ? <PostsList posts={posts} remove={removePost} title="Посты" />
                : <h1>Нет ничего</h1>
                }
            </div>
        </>
    );
};

export default App;
