interface Props {
    children: React.ReactNode;
}
import Sidebar from '../components/Sidebar/index';
export default function sidebarLayout({ children }: Props) {
    return (
        <>
            <div className='flex'>
                <Sidebar />
                <div className='h-full '>{children}</div>
            </div>
        </>
    );
}
