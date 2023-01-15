import type { Filter } from '../types/Filter';
import type { Post } from '../types/Post';

export const postService = {
    posts: [
        { id: 1, title: 'js', body: 'desc' },
        { id: 2, title: 'dfg 2', body: 'desc' },
        { id: 3, title: 'js 3', body: 'desc' },
    ] as Post[],

    get() {
        return this.posts;
    },
    add(post: Post) {
        this.posts = this.posts.concat(post);
    },
    remove(post: Post) {
        this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    sort(field: Filter['sortKey']) {
        this.posts = [...this.posts].sort((a, b) =>
            (a[field] as string).localeCompare(b[field] as string));
    },
};
