import React, { useState, useEffect } from 'react';
import { CogIcon } from '@heroicons/react/solid';
// import SelectFonts from './SelectFonts';
import Modes from './Modes';

function HomePage() {
    return <h1 className='text-center'>HomePage</h1>;
}

function FirstPage() {
    return <h1 className='text-center'>First Page</h1>;
}

function SecondPage() {
    return <h1 className='text-center'>Second Page</h1>;
}

function ThirdPage() {
    return <h1 className='text-center'>Third Page</h1>;
}

function Setting() {
    const [activePage, setActivePage] = useState('home');
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

    const handlePageClick = (page) => {
        setActivePage(page);
    };

    return (
        <div
            className='
                 flex 
                 bg-white 
                 text-dark-elements-color 
                 dark:bg-dark-body 
                 dark:text-white'
        >
            <div
                className='
                 h-screen 
                 w-72 '
            >
                <div
                    className='
                      m-6 
                      flex 
                      items-center'
                >
                    <CogIcon
                        className='
                         w-6 h-6 
                         cursor-pointer
                         '
                        stroke={'dark:black'}
                        strokeWidth={1.5}
                    />
                    <h2 className=' text-xl p-3'>Settings</h2>
                    <div
                        className='
                         absolute 
                         inset-y-0 
                         border-l-2 
                         md:border-l-4 
                         border-black 
                         left-40 
                         dark:border-white'
                    />
                </div>
                <div
                    className='
                       flex 
                       flex-col 
                       justify-end'
                >
                    <div
                        className='
                     border-t-2 
                     md:border-t-4 
                     border-black 
                     dark:border-white'
                    ></div>
                    <a
                        href='#HomePage'
                        onClick={() => handlePageClick('home')}
                        className='m-6 text-xl'
                    >
                        Home Page
                    </a>
                    <div
                        className='
                    border-t-2 
                    md:border-t-4 
                    border-black 
                    dark:border-white'
                    ></div>
                    <a
                        href='#FirstPage'
                        onClick={() => handlePageClick('first')}
                        className='m-6 text-xl'
                    >
                        First Page
                    </a>
                    <div
                        className='
                        border-t-2 
                        md:border-t-4 
                        border-black 
                        dark:border-white'
                    ></div>
                    <a
                        href='#SecondPage'
                        onClick={() => handlePageClick('second')}
                        className=' m-6 text-xl'
                    >
                        Second Page
                    </a>
                    <div
                        className='
                         border-t-2 
                         md:border-t-4 
                         border-black 
                         dark:border-white'
                    ></div>
                    <a
                        href='#ThirdPage'
                        onClick={() => handlePageClick('third')}
                        className='m-6 text-xl'
                    >
                        Third Page
                    </a>
                    <div
                        className='
                       border-t-2 
                       md:border-t-4 
                       border-black 
                       dark:border-white'
                    ></div>
                </div>
            </div>
            {/* <SelectFonts /> */}

            {/* <span className='text-gray-400 lg:mx-4'>|</span> */}
            <Modes
                theme={mode}
                onClick={() => {
                    setMode(mode === 'dark' ? 'light' : 'dark');
                }}
            ></Modes>
            <div
                className='
                p-7 
                text-2xl 
                font-semibold 
                flex-1 
                h-screen'
            >
                {activePage === 'home' && <HomePage />}
                {activePage === 'first' && <FirstPage />}
                {activePage === 'second' && <SecondPage />}
                {activePage === 'third' && <ThirdPage />}
            </div>
        </div>
    );
}

export default Setting;
