import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentUser';
import Post from '@/components/Post';
import PostFeed from '@/components/Post/PostFeed';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const { data: user } = useCurrentUser();
    console.log(user);
    return (
        <>
            <Head>
                <title>Guild</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <h1 className='text-3xl font-bold underline text-center'>
                Hello {user?.email} <br />
                <button
                    title='sign out'
                    className='text-red-500'
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
            </h1>
            <Post />
            <PostFeed />
        </>
    );
}
