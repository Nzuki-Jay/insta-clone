import './Notification.scss';
import { UserData } from '../../Data/users';
import { PostData } from '../../Data/posts';

const Notification = ({notification}) => {
    const user = UserData.find((user) => user.id === notification.userId);
    const post = (notification.type === 'comment' || notification.type === 'like') 
    ? PostData.find((post) => post.id === notification.content.postId) 
    : null;

    return <>
           {notification.type === "comment" && <div className="note">
                <div className="left">
                    <img className='profImg' src={user.profileImage} alt="" />  
                    <p>
                        <span>{user.username}</span>
                        Commented: {notification.content.notify}
                        <span>25h</span>
                    </p>  
                </div>
                <div className="right">
                    <img className='postImg' src={post.postImg}  alt=""/>
                </div>


            </div>}

            {notification.type === "like" && <div className="note">
                <div className="left">
                    <img className='profImg' src={user.profileImage} alt="" />  
                    <p>
                        <span>{user.username}</span>
                        Liked your post.
                        <span>25h</span>
                    </p>  
                </div>
                <div className="right">
                    <img className='postImg' src={post.postImg}  alt=""/>
                </div>

            </div>}

            {notification.type === "follow" && <div className="note">
                <div className="left">
                    <img className='profImg' src={user.profileImage} alt="" />  
                    <p>
                        <span>{user.username}</span>
                        Started following you.
                        <span>25h</span>
                    </p>  
                </div>
                <div className="right">
                    {
                        (notification.content.status === "follow") ? <button 
                        className='blue'>Follow</button> : <button className='black'>Following</button>
                    }
                </div>
            </div>}
        
    
    </>
}

export default Notification
