import './OverlayPost.scss';
import { FaTimes } from 'react-icons/fa';
import { useGlobalState } from '../../GlobalState';
import { PostData } from '../../Data/posts';
import { UserData } from '../../Data/users';
import { FaEllipsisH } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdSaveAlt } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";

const OverlayPost = ({postId}) => {
    const {setDisplayOverlayPost, setSlidePostId, setActiveOverlays} = useGlobalState();
    const post = PostData.find((post) => post.id === postId);
    const user = UserData.find((user) => user.id === post.userId);
    if (!post) return null;
    if (!user) return null;   

    // get the user that has commented
    const commentsUser = post.comments.reduce((acc, comment) => {
        const user = UserData.find((user) => user.id === comment.userId);
        if (user) {
            if (!acc[comment.userId]) {
                acc[comment.userId] = user;
            }
        }
        return acc;
    }, {});
    

    return <>
        <div className='overlayPost'>
            <div className="overlayLeft">
                <img src={post.postImg} alt="" />
            </div>

            <div className="overlayRight">
                <div className="rightTop">
                    <div>
                        <img src={user.profileImage} alt="" />
                        <span>{user.username}</span>
                    </div>

                    <FaEllipsisH />          
                </div>
                <hr></hr>
                <div className="rightCenter">
                    <div className='item'>
                        <img src={user.profileImage} alt="" />
                        <p>
                            <span>{user.username}</span>
                            {post.desc}
                        </p>
                    </div>
                    {
                        post.comments.map((comment) => (
                             <div className='comment'>
                               <div className='commentLeft'>
                                    <img src={commentsUser[comment.userId].profileImage} alt="" />

                                    <div className='commenttext'>
                                        <p>
                                            <span>{commentsUser[comment.userId].username}</span>
                                            {comment.comment}
                                        </p>
                                        <div>
                                            <span>{comment.createdat}</span>
                                            <span>Reply</span>
                                        </div>

                                    </div>
                               </div>

                               <FaRegHeart className='icon' />

                            </div>
                        ))
                    }
                </div>
                <hr></hr>
                <div className="rightCenter2">
                    <div className='rightCenter2Top'>
                        <div>
                            <FaRegHeart className='icon' />
                            <FaRegComment className='icon' />
                            <IoPaperPlaneOutline className='icon' />
                        </div>

                        <MdSaveAlt className='icon' />
                    </div>
                    <div className='rightCenter2Bottom'>
                        <p>{post.likes} Likes</p>
                        <span>{post.createdat}</span> 
                    </div>                       
                    
                </div>
                <hr></hr>
                <div className='rightBottom'>
                    <form action="">
                        <input type='text' placeholder='Add a comment' />
                        <button type="submit">Post</button>  
                    </form>   
                    <GrEmoji className='inputicon' />
                </div>
            </div>

            <FaTimes  onClick={() => {
                setDisplayOverlayPost(null)
                setSlidePostId()
                setActiveOverlays(false)
            }} className='remove' />
        </div>
    </>
}

export default OverlayPost