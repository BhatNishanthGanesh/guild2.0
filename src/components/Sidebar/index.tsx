import React from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import Link from 'next/link';
import { CogIcon } from '@heroicons/react/outline';

export default function Index() {
    const { data: currentUser } = useCurrentUser();

    // Define an array of links
    const links = [
        { href: '/settings/setting', label: 'Home Page' },
        { href: '/settings/appearance', label: 'Appearance' },
        { href: '/settings/FirstPage', label: 'First Page' },
        { href: '/settings/SecondPage', label: 'Second Page' },
    ];

    return (
        <div className='flex h-full'>
            {/* Sidebar */}
            <div className='w-72 bg-gray-200 dark:bg-black'>
                {/* Sidebar content */}
                <div className='m-6 flex items-center'>
                    <CogIcon
                        className='w-6 h-6 cursor-pointer'
                        strokeWidth={1.5}
                    />
                    <h2 className='text-xl p-3'>Settings</h2>
                    <div className='absolute inset-y-0 border-l-2 md:border-l-4 border-black left-40 dark:border-white' />
                </div>
                <div className='flex flex-col justify-end'>
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                            <div className='border-t-2 md:border-t-4 border-black dark:border-white' />
                            <Link href={link.href} passHref>
                                <div className='m-6 text-xl cursor-pointer'>
                                    {link.label}
                                </div>
                            </Link>
                        </React.Fragment>
                    ))}
                    <div className='border-t-2 md:border-t-4 border-black dark:border-white' />
                </div>
            </div>
        </div>
    );
}
