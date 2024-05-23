import { PostData } from '../../Data/posts';
import GridPost from '../../Components/GridPost/GridPost';
import { SavedData } from '../../Data/extra';
import './Saved.scss';

const Saved = () => {
    const posts = PostData.filter((post) => {
        return SavedData.some((saved) => saved.postId === post.id);
    });
    
    return <>
        <div className='saved'>
            {
                posts.map((post, id) => (
                    <GridPost post={post} id={id} key={id} />
                ))
            }
        </div>
    </>
}
export default Saved