import './FeedPost.scss';
import { UserData } from '../../Data/users';
import { FaEllipsisH } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { useState } from 'react';
import { useGlobalState } from '../../GlobalState';


const FeedPost = ({post}) => {
    const user = UserData.filter((user) => user.id === post.userId);
    const [seeDesc, setSeeDesc] = useState(false);
    const [displayBtn, setDisplayBtn] = useState(false);
    const {setDisplayOverlayPost, setActiveOverlays} = useGlobalState();

    return <>
        <div className='feedPost'>
            <div className="top">
                <div className='topLeft'>
                    <img className='profImg' src={user[0].profileImage} alt="" />
                    <div className='profName'>
                        <span>{user[0].username}</span>
                        <div></div>
                        <span>{post.createdat}</span>
                    </div>
                </div>
                <FaEllipsisH className='icon' />
            </div>
            <div className="center">
                <img className='postImg' src={post.postImg} alt="" />
            </div>
            <div className="bottom">
                <div className='bottomTop'>
                    <div className='bottomTopLeft'>
                        <FaRegHeart className='icon' />
                        <FaRegComment className='icon' />
                        <IoPaperPlaneOutline className='icon' />
                    </div>

                    <MdSaveAlt className='icon' />
                </div>
                <div className="bottomCenter">
                    <p>{post.likes} Likes</p>

                    {
                        seeDesc || post.desc.length <= 30 ? (
                            <p>{post.desc}</p>
                        ) : (
                            <p className='desc'>
                                {post.desc.substring(0, 20)}...
                                <span onClick={() => {setSeeDesc(true)}}>more</span>
                            </p>     
                        )
                    }

                    {post.comments.length > 0 && <span onClick={() => {
                        setDisplayOverlayPost(post.id)
                        setActiveOverlays(true)

                    }} className='commentBtn'>View all {post.comments.length} comments</span>}
                </div>

                <div className="bottomEnd">
                    <form action="">
                        <input onChange={() => {setDisplayBtn(true)}} type='text' placeholder='Add a comment' />
                        {displayBtn && <button type="submit">Post</button>}    
                    </form>   
                    <GrEmoji className='inputicon' />
                </div>

            </div>
            <hr></hr>
        </div>
        

    </>
}

export default FeedPost