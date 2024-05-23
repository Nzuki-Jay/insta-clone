import './Home.scss';
import Story from '../../Components/Story/Story';
import Suggested from '../../Components/Suggested/Suggested';
import FeedPost from '../../Components/FeedPost/FeedPost';
import { PostData } from '../../Data/posts';
import { useGlobalState } from '../../GlobalState';
import OverlayPost from '../../Components/OverlayPost/OverlayPost';
import { useEffect } from 'react';

const Home = () => {
    const {displayOverlayPost, setPage} = useGlobalState();

    useEffect(() => {
        setPage('home')
    })

    return <>

        <div className='home'>
            <div className='left'>
                <Story />
                {PostData.map((post) => {
                    return <FeedPost key={post.id} post={post} />
                })}
            </div>

            <div className="right">
                <Suggested />
            </div>
        </div>

        {displayOverlayPost && <OverlayPost postId={displayOverlayPost}/>}
    </>
}

export default Home