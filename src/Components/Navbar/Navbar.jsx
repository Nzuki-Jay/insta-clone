import './Navbar.scss';
import { Link } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { UserData } from '../../Data/users';
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalState } from '../../GlobalState';

const Navbar = () => {
    const {
        activeNavbar,
        setPage,
        controlNotificationsOverlay,
        controlSearchOverlay,
    } = useGlobalState();

    return <>
        <div className={`navbar ${activeNavbar ? 'active' : ''}`}>
            <Link to="/">
                <div className='logo'>
                    <BsInstagram  className='icon' />
                    <span>Instagram</span>
                </div>    
            </Link>

            <div className='navLinks'>
                <Link to="/">
                    <div className={`navLink ${activeNavbar ? 'active' : ''}`}>
                        <GoHome className='icon' />
                        <span>Home</span>
                    </div>
                </Link>

                <div onClick={() => {
                    controlSearchOverlay()
                }}
                    className={`navLink ${activeNavbar ? 'active' : ''}`}>
                    <IoSearchOutline className='icon' />
                    <span>Search</span>
                </div>

                <Link to="/explore">
                    <div className={`navLink ${activeNavbar ? 'active' : ''}`}>
                        <MdOutlineExplore className='icon' />
                        <span>Explore</span>
                    </div>
                </Link>

                <Link to="/explore">
                    <div  className={`navLink ${activeNavbar ? 'active' : ''}`}>
                        <BsCameraReels className='icon' />
                        <span>Reels</span>
                    </div>
                </Link>

                <Link to="/messages">
                    <div onClick={() => {setPage('messages')}} className={`navLink ${activeNavbar ? 'active' : ''}`}>
                        <RiMessengerLine className='icon' />
                        <span>Messages</span>
                    </div>
                </Link>

                <div onClick={() => {
                    controlNotificationsOverlay()
                }}  className={`navLink ${activeNavbar ? 'active' : ''}`}>
                    <FaRegHeart className='icon' />
                    <span>Notifications</span>
                </div>

                <div className={`navLink ${activeNavbar ? 'active' : ''}`}>
                    <MdOutlineAddBox className='icon' />
                    <span>Create</span>
                </div>

                <Link  to="/profile">
                    <div className={`navLink ${activeNavbar ? 'active' : ''}`}>
                        <img src={UserData[0].profileImage} alt=""/>
                        <span>{UserData[0].username}</span>
                    </div>
                </Link>

            </div>

            <div  className={`menuBtn ${activeNavbar ? 'active' : ''}`}>
                <AiOutlineMenu className='icon' />
                <span>Menu</span>
            </div>
            
        </div>

        <div className='topnavbar'>
            <Link to="/">
                <BsInstagram  className='icon'/>
            </Link>
            
            <div className='right'>
                <div onClick={() => {controlSearchOverlay()}} className='searchInput'>
                    <IoSearchOutline className='icons' />
                    <input type='text' placeholder='Search...' />
                </div>
                <FaRegHeart onClick={() => {controlNotificationsOverlay()}} className='icon'/>
            </div>

        </div>
    </>

}

export default Navbar