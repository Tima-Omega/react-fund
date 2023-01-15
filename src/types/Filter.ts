import { Post } from './Post';

export interface Filter {
    query: string;
    sortKey: keyof Post;
}
