import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    useContext,
} from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { FontContext, FontAction } from '../contexts/FontContext';

const SelectFonts: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [font, dispatch] = useContext(FontContext);
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback(
        (e: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        },
        [selectRef]
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [handleClickOutside]);

    const handleFontSelection = (selectedFont: FontAction['type']) => {
        let selectedFontValue = '';
        if (selectedFont === 'SELECT_FONT_SERIF') {
            selectedFontValue = 'Serif';
        } else if (selectedFont === 'SELECT_FONT_SANS_SERIF') {
            selectedFontValue = 'Sans-serif';
        } else if (selectedFont === 'SELECT_FONT_MONOSPACE') {
            selectedFontValue = 'Monospace';
        }

        const action: FontAction = { type: selectedFontValue };
        dispatch(action);
        setOpen(false);
    };

    return (
        <div className='relative' ref={selectRef}>
            <div
                className='flex cursor-pointer flex-row items-center gap-3 dark:text-white'
                onClick={() => setOpen(!open)}
            >
                <h2
                    className='font-bold p-8'
                    style={
                        font.font === 'Monospace'
                            ? { backgroundColor: 'yellow' }
                            : {}
                    }
                >
                    {font.font}
                </h2>
                <ChevronDownIcon className='h-8 w-8' />
            </div>
            {open && (
                <div className='absolute left-0 top-10 z-10 flex w-60 flex-col gap-3 rounded-md bg-white p-4 shadow-xl transition-all duration-500 dark:bg-black dark:shadow-xl dark:shadow-black'>
                    <p
                        className='mr-16 w-full cursor-pointer items-center gap-3 rounded-md px-2 py-1 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700'
                        style={
                            font.font === 'Serif'
                                ? { backgroundColor: 'yellow' }
                                : {}
                        }
                        onClick={() => handleFontSelection('SELECT_FONT_SERIF')}
                    >
                        Serif
                    </p>
                    <p
                        className='mr-16 w-full cursor-pointer items-center gap-3 rounded-md px-2 py-1 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700'
                        style={
                            font.font === 'Sans-serif'
                                ? { backgroundColor: 'yellow' }
                                : {}
                        }
                        onClick={() =>
                            handleFontSelection('SELECT_FONT_SANS_SERIF')
                        }
                    >
                        Sans-serif
                    </p>
                    <p
                        className='mr-16 w-full cursor-pointer items-center gap-3 rounded-md px-2 py-1 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700'
                        style={
                            font.font === 'Monospace'
                                ? { backgroundColor: 'yellow' }
                                : {}
                        }
                        onClick={() =>
                            handleFontSelection('SELECT_FONT_MONOSPACE')
                        }
                    >
                        Monospace
                    </p>
                </div>
            )}
        </div>
    );
};

export default SelectFonts;
