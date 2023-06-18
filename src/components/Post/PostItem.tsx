import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import Avatar from './Avatar';
import DeletePost from '@/hooks/deletePost';
import { HeartIcon, MailIcon } from '@heroicons/react/outline';
import Link from 'next/link';

interface PostItemProps {
    userId?: string;
    data?: Record<string, any>;
}

export default function PostItem({ userId, data = {} }: PostItemProps): any {
    const router = useRouter();
    const { data: currentUser } = useCurrentUser();

    const handleLike = useCallback((event: any) => {}, []);

    return (
        <div
            className='
            bg-white
            text-black
            dark:bg-dark-body 
            dark:text-white
            mx-0
        '
        >
            <div>
                <div
                    className='
           
        
             border-b-[2px] 
        dark:border-white 
        p-5 
        cursor-pointer 
        transition
          '
                >
                    <div
                        className='
                flex
                flex-row
                items-start
                
            
                p-2
                rounded-md
                mb-2
            
                '
                    >
                        <Avatar seed={data?.user?.id} />

                        <p
                            className='
                    text-gray-700
                    font-semibold
                    text-sm
                    dark:text-white
                    ml-2
                    mt-0.5
                    '
                        >
                            {data?.user?.name}
                        </p>
                        <p
                            className='
                    text-gray-700
                    dark:text-white
                    ml-2
                    '
                        >
                            @{data?.user?.username}
                        </p>
                        <div className='ml-auto'>
                            <span className='text-neutral-500 text-sm dark:text-white'>
                                {new Date(data?.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    <div>
                        <Link href={`/posts/${data?.id}`}>
                            <p
                                className='
                    text-gray-700
                    dark:text-white
                    '
                            >
                                {data?.body}
                            </p>
                        </Link>
                    </div>

                    <div className='flex flex-row items-center mt-3 gap-10'>
                        <div
                            className='
                dark:text-white
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-sky-500
            '
                        >
                            <MailIcon className='icon' />
                            <p>{data?.comments?.length}</p>
                        </div>
                        <div
                            className='
                dark:text-white
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-red-500
            '
                            onClick={handleLike}
                        >
                            <HeartIcon className='icon' />
                            <p>{data?.likes?.length || 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
