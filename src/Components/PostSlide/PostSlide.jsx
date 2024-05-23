import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import OverlayPost from '../OverlayPost/OverlayPost';
import './PostSlide.scss';
import { useState } from 'react';

const PostSlide = ({ id, postId, posts }) => {
    const [currentPostId, setCurrentPostId] = useState(postId);
    const [currentId, setCurrentId] = useState(id);
    console.log(currentPostId, posts.length)

    const slideRight = () => {
        if (currentId < posts.length - 1) {
            setCurrentId(currentId + 1);
            setCurrentPostId(posts[currentId + 1].id); 
        }       
    };

    const slideLeft = () => {
        if (currentId > 0) {
            setCurrentId(currentId - 1);
            setCurrentPostId(posts[currentId - 1].id); 
        }
    };

    return (
        <div className='postSlide'>
            <OverlayPost postId={currentPostId} />
            <button style={{display: currentId <= 0 ? 'none': ''}} className='leftBtn' onClick={slideLeft}>
                <FaChevronLeft />
            </button>
            <button style={{display: currentId >= posts.length  - 1 ? 'none': ''}} className='rightBtn' onClick={slideRight}>
                <FaChevronRight />
            </button>
        </div>
    );
};

export default PostSlide