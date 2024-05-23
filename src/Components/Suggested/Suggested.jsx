import './Suggested.scss';
import { UserData } from '../../Data/users';
import { Link } from 'react-router-dom';

const Suggested = () => {

    return <>
        <div className='suggested'>
            <div className='suggestedProf'>
                <Link to="/profile">
                    <div className='info'>
                        <img src={UserData[0].profileImage} alt="" />
                        <div>
                            <span>
                                {UserData[0].username}
                            </span>
                            <p>
                                {UserData[0].username}
                            </p>
                        </div>
                    </div>
                </Link>
                
                <Link to='/login'>
                    <span className='link'>
                        Switch
                    </span>
                </Link>

            </div>

            <div className="suggestedList">
                <div className="header">
                    <p>Suggested for you</p>
                    <Link to='/suggested'>
                        <span className='link'>
                            See All
                        </span>
                    </Link>
                </div>

                {
                    UserData.slice(1, 6).map((user) => (
                        <div className='suggestedProf' key={user.id}>
                            <div className='info'>
                                <img src={user.profileImage} alt="" />
                                <div>
                                    <span>{user.username}</span>
                                    <p>Suggested for you</p>
                                </div>
                            </div>
                            <Link to='/login'>
                                <span className='link'>Follow</span>
                            </Link>
                        </div>
                    ))
                }
            </div>

            <div className='suggestedFooter'>
                <p>
                    <a href="/">About</a> . <a href="/">Help</a> . <a href="/">Press</a> . <a href="/">API</a> . 
                    <a href="/">Jobs</a> . <a href='/'>Privacy</a> . <a href="/">Terms</a> . <a href="/">Locations</a> . 
                    <a href="/">Language</a> . <a href="/">Meta Verified</a>   
                </p>

                <p>
                     © 2024 INSTAGRAM FROM META
                </p>

            </div>

        </div>
    </>
}

export default Suggested