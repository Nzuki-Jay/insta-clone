import { FaHeart, FaComment } from 'react-icons/fa';
import { useState } from 'react';
import './GridPost.scss';
import { useGlobalState } from '../../GlobalState';


const GridPost = ({post, id}) => {
    const [diplayIcons, setDisplayIcons] = useState(false);
    const {setSlidePostId, setDisplayOverlayPost, setActiveOverlays} = useGlobalState();

    const setStates = () => {
        setSlidePostId(id);
        setDisplayOverlayPost(post.id);
        setActiveOverlays(true)
    }

    return <>
        <div onClick={setStates} onMouseEnter={() => {setDisplayIcons(true)}}
            onMouseLeave={() => {setDisplayIcons(false)}} className="post">
            <img src={post.postImg} alt="" />
            <div className='blur'></div>

            {diplayIcons && <div className='icons'>
                <div className="icon">
                    <FaHeart />
                    <span>{post.likes}</span>
                </div>

                <div className="icon">
                    <FaComment />
                    <span>{post.comments.length}</span>
                </div>     

            </div>}
        </div>
    
    </>
}

export default GridPost