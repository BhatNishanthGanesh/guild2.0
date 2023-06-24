import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import SettingLayout from '../../../layout/SettingsLayout';
interface ModesProps {
    theme?: string;
    onClick: () => void;
}

export default function Modes({ theme, onClick }: ModesProps) {
    return (
        <SettingLayout>
            <div>
                <div
                    className='
                      p-8 
                      items-center 
                      gap-4'
                >
                    <div
                        className='
                      cursor-pointer
                      '
                        onClick={onClick}
                    >
                        {theme === 'dark' ? (
                            <SunIcon
                                className='
                               h-8 w-8
                               text-yellow-400'
                            />
                        ) : (
                            <MoonIcon
                                className='
                                 h-8 w-8 
                                 text-black-400'
                            />
                        )}
                    </div>
                </div>
            </div>
        </SettingLayout>
    );
}
