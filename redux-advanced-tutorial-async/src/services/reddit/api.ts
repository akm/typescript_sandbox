import axios from 'axios';

import { Post } from './models';

interface ApiConfig {
    baseURL: string;
    timeout: number;
}
const DEFAULT_API_CONFIG: ApiConfig = {
    baseURL: 'https://www.reddit.com',
    timeout: 7000,
};

export const getPostsFactory = (optionConfig?: ApiConfig) => {
    const config = {
        ...DEFAULT_API_CONFIG,
        ...optionConfig,
    };
    const instance = axios.create(config);
    return async (subreddit: string) => {
        try {
            const response = await instance.get(`/r/${subreddit}.json`);
            if (response.status !== 200) {
                throw new Error('Server Error');
            }
            const posts: Post[] = response.data;
            return posts;
        } catch (err) {
            throw err;
        }
    };
};
