import './Explore.scss';
import PostSlide from '../../Components/PostSlide/PostSlide';
import GridPost from '../../Components/GridPost/GridPost';
import { PostData } from '../../Data/posts';
import { useGlobalState } from '../../GlobalState';
import { useEffect } from 'react';

const Explore = () => {

    // global states
    const {
        displayOverlayPost, 
        slidePostId, 
        setSlidePosts, 
        slidePosts, 
        setPage
    } = useGlobalState();

    // always load the slide posts data for the profile page
    useEffect(() => {
        setSlidePosts(PostData);
        setPage('explore');
    });

    return <>
        <div className='explore'>
            {
                PostData.map((post, id) => (
                    <GridPost post={post} id={id} key={id} />
                ))
            }
        </div> 

        {displayOverlayPost && slidePostId >= 0 &&  <PostSlide id={slidePostId} posts={slidePosts} postId={displayOverlayPost} />}  
    </>
}

export default Explore