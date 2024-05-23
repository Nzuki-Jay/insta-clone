import './Story.scss';
import { UserData } from '../../Data/users';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';

const Story = () => {

    const storyRef = useRef(null);

    const scrollLeft = () => {
        if (storyRef.current) {
            storyRef.current.scrollLeft -= 700; 
        }
    };

    const scrollRight = () => {
        if (storyRef.current) {
            storyRef.current.scrollLeft += 700; 
        }
    };

    return <>
        <div className='stories'>
            <div className='storySlide' ref={storyRef}>
                {
                    UserData.map((story) => (
                        <div className='story' key={story.id}>
                            <div className='img'>
                                <img src={story.profileImage} alt="" />
                                <div className="gradient"></div>
                            </div>
                           
                           <span>{story.username}</span>
                        </div>
                    ))
                }
            </div>

            <div className='slideBtns'>
                <FaChevronRight onClick={scrollRight} className='slideBtn rightbtn' />
                <FaChevronLeft onClick={scrollLeft} className='slideBtn leftbtn' />
            </div>
        </div>
    
    </>
}

export default Story