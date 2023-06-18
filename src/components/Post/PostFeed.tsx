import usePosts from '@/hooks/usePosts';
import PostItem from './PostItem';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface PostFeedProps {
    data?: Record<string, any>;
    userId?: string;
}

export default function PostFeed({
    data,
    userId,
}: PostFeedProps): React.ReactElement<React.ReactNode> {
    const posts = data;
    const [mode, setMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('mode') || 'light';
        } else {
            return 'light';
        }
    });

    useEffect(() => {
        if (mode === 'dark') {
            document.body.classList.add('dark');
            if (typeof window !== 'undefined') {
                localStorage.setItem('mode', 'dark');
            }
        } else {
            document.body.classList.remove('dark');
            if (typeof window !== 'undefined') {
                localStorage.setItem('mode', 'light');
            }
        }
    }, [mode]);
    return (
        <div
            className='  dark:bg-dark-body 
        dark:text-white'
        >
            {posts?.map((post: Record<string, any>) => (
                <div key={post.id} className='gap-4 mx-4 mt-4  '>
                    <PostItem data={post} />
                </div>
            ))}
        </div>
    );
}
