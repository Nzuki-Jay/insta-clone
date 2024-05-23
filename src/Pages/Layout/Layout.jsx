import './Layout.scss';
import Navbar from '../../Components/Navbar/Navbar';
import FooterNavbar from '../../Components/FooterNavbar/FooterNavbar';
import { Outlet } from 'react-router-dom';
import { useGlobalState } from '../../GlobalState';
import Notifications from '../../Components/Notifications/Notifications';
import Search from '../../Components/Search/Search';
import { useEffect } from 'react';

const Layout = () => {
    const {
        activeOverlays,
        removeOverlays, 
        openNotifications,
        closeOverlays,
        setActiveNavbar,
        openSearch,
        page,
    } = useGlobalState()

    // ensure navar is inactive across all pages by default

    useEffect(() => {
        if (page === 'messages' || openNotifications || openSearch) {
            setActiveNavbar(true);
        } else {
            setActiveNavbar(false);
        }
    })

    return <>
        <div className='layout'>
            <Navbar />
            <div onClick={closeOverlays} className='content'>
                <Outlet />
            </div>
            <FooterNavbar />
            { activeOverlays && <div className="transparent-overlay" onClick={() => {removeOverlays()}}></div>}
            {openNotifications && <Notifications />}
            {openSearch && <Search />}
        </div>
        
    </>

}

export default Layout