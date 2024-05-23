import './FooterNavbar.scss';
import { Link } from "react-router-dom"
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineAddBox } from "react-icons/md";
import { UserData } from '../../Data/users';

const FooterNavbar = () => {

    return <>
        <div className='bottomnavbar'>
            <Link to="/">  
                <GoHome className='icon' />
            </Link>
            <Link to="/explore">
                <MdOutlineExplore className='icon' />
            </Link>
            <Link to="/explore">
                <BsCameraReels className='icon' />
            </Link>
            <Link to="/messages">
                <RiMessengerLine className='icon' />
            </Link>
            <MdOutlineAddBox className='icon' />
            <Link to="/profile">
                <img src={UserData[0].profileImage} alt=""/>
            </Link>
            
        </div>
    </>
}

export default FooterNavbar