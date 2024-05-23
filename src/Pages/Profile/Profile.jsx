import './Profile.scss';
import { Outlet } from 'react-router-dom';
import { UserData } from '../../Data/users';
import { PostData } from '../../Data/posts';
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import { BsGrid3X3 } from "react-icons/bs";
import { MdSaveAlt } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { useGlobalState } from '../../GlobalState';
import { useEffect } from 'react';
import ShareThought from '../../Components/ShareThought/ShareThought';
import ProfileSetting from '../../Components/ProfileSettings/ProfileSettings';
import AddImage from '../../Components/AddProfileImg/AddProfileImg';
import PostSlide from '../../Components/PostSlide/PostSlide';
import {TaggedData, SavedData} from '../../Data/extra';


const Profile = () => {
     // global states
     const {
        profileActiveLink,
        setProfileActiveLink,
        displayOverlayPost, 
        slidePostId, 
        setSlidePosts, 
        slidePosts, 
        setActiveOverlays,
        openShareThought,
        setOpenShareThought,
        openProfSettings, 
        setopenProfSettings,
        openAddProfImg, 
        setOpenAddProfImg,
        setPage,
    } = useGlobalState();

    // profile page data
    const posts = PostData.filter((post) => post.userId === UserData[0].id );
    const savedPosts = PostData.filter((post) => {
        return SavedData.some((saved) => saved.postId === post.id);
    });
    const taggedPosts = PostData.filter((post) => {
        return TaggedData.some((tagged) => tagged.postId === post.id);
    })

    // always load the slide posts data for the profile page
    useEffect(() => {
        setSlidePosts(posts);
        setPage('profile');
    });

    return <>
        <div className='profile'>
            <div className="profileInfo">
                <div className="profileTop">
                    <div className='div1'>
                        <img onClick={() => {
                            setOpenAddProfImg(true)
                            setActiveOverlays(true)
                        }} src={UserData[0].profileImage} alt="" />

                        <div onClick={() => {
                            setOpenShareThought(true)
                            setActiveOverlays(true)}}  className='imageOverlay'>
                            <p>Note...</p>
                            <button>
                                <IoMdArrowDropup  className='icon'/>
                                <IoMdArrowDropdown className='icon' />
                            </button>
                        </div>
                    </div>

                    <div className='div2'>
                        <div className='up'>
                            <p>{UserData[0].username}</p>
                            <div>
                                <Link to="/settings">
                                    <button>
                                        Edit Profile
                                    </button>
                                </Link>

                                <Link to="/settings">
                                    <button>
                                        View Archive
                                    </button>
                                </Link>
                                <IoSettingsOutline
                                 onClick={() => {
                                    setActiveOverlays(true)
                                    setopenProfSettings(true)
                                 }} className='icon' />
                            </div>

                        </div>

                        <div className='middle'>
                            <p>{posts.length} Post</p>
                            <p>10k Followers</p>
                            <p>2k Following</p>
                        </div>

                        <div className='down'>
                            <p>{UserData[0].username}</p>
                            <p>Lone wolf🐺</p>
                            <p>Poetry and madness.</p>
                            <p>There's something to it, madness is the secret to artistry.</p>
                            <p>www.wattpad.com/user/mbulajay83</p>
                        </div>
                    </div>

                </div>
                <div className='highlights'>
                    <FaPlus className='icon' />
                </div>
                <div className="profileBottom">
                    <Link to="/profile">
                        <div onClick={() => {
                            setProfileActiveLink('profile');
                            setSlidePosts(posts);
                        }}
                         className={`link ${profileActiveLink === "profile" ? 'active' : ''} `}>
                            <BsGrid3X3 className='icon' />
                            POSTS
                        </div>
                    </Link>

                    <Link to="/profile/saved">
                        <div onClick={() => {
                             setProfileActiveLink('saved');
                             setSlidePosts(savedPosts);
                        }}
                         className={`link ${profileActiveLink === "saved" ? 'active' : ''} `}>
                            <MdSaveAlt className='icon' />
                            SAVED
                        </div>
                    </Link>

                    <Link to="/profile/tagged">
                        <div onClick={() => {
                             setProfileActiveLink('tagged');
                             setSlidePosts(taggedPosts);
                        }}
                         className={`link ${profileActiveLink === "tagged" ? 'active' : ''} `}>
                            <RiContactsBook2Fill className='icon' />
                            TAGGED
                        </div>
                    </Link>      
                </div>
            </div>
            <div className="profileContent">
                <Outlet />
            </div>
        </div>

        {openShareThought && <ShareThought setOpenShareThought={setOpenShareThought} />}

        {openProfSettings  && <ProfileSetting />}
        {openAddProfImg && <AddImage setOpenAddProfImg={setOpenAddProfImg} />}

        {displayOverlayPost && slidePostId >= 0 &&  <PostSlide id={slidePostId} posts={slidePosts} postId={displayOverlayPost} />}
    </>
}

export default Profile