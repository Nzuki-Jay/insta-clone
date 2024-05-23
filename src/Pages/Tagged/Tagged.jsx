import { PostData } from '../../Data/posts';
import GridPost from '../../Components/GridPost/GridPost';
import { TaggedData } from '../../Data/extra';
import './Tagged.scss';

const Tagged = () => {
    const posts = PostData.filter((post) => {
        return TaggedData.some((tagged) => tagged.postId === post.id);
    })
    
    return <>
        <div className='tagged'>
            {
                posts.map((post, id) => (
                    <GridPost post={post} id={id} key={id} />
                ))
            }
        </div>
    </>
}
export default Tagged