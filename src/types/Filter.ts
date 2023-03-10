import type { Post } from './Post';

export interface Filter {
    query: string;
    sortKey: keyof Post;
}
