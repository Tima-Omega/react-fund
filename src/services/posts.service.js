export const postService = {
    posts: [
        { id: 1, title: 'js', body: 'desc' },
        { id: 2, title: 'dfg 2', body: 'desc' },
        { id: 3, title: 'js 3', body: 'desc' },
    ],

    get() {
        return this.posts;
    },
    add(post) {
        this.posts = this.posts.concat(post);
    },
    remove(post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    sort(field) {
        this.posts = [...this.posts].sort((a, b) => a[field].localeCompare(b[field]));
    },
};
