import './profilePosts.scss';
import { UserData } from '../../Data/users';
import { PostData } from '../../Data/posts';
import GridPost from '../../Components/GridPost/GridPost';


const ProfilePosts = () => {
    const posts = PostData.filter((post) => post.userId === UserData[0].id);

    return <>
        <div className='profileposts'>
            {
                posts.map((post, id) => (
                    <GridPost post={post} id={id} key={id} />
                ))
            }
        </div>   
    </>
}
export default ProfilePosts