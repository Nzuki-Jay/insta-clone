import './Chat.scss';
import { useParams } from 'react-router-dom';
import { UserData } from '../../Data/users';
import { IoIosCall } from "react-icons/io";
import { TbVideo } from "react-icons/tb";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import { FaMicrophone, FaRegImage } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import { useGlobalState } from '../../GlobalState';
import EmojiPicker from 'emoji-picker-react';


const Chat = () => {
    const { userId } = useParams();
    const user = UserData.find((user) => user.id === parseInt(userId, 10));

    // handle emoji picker
    const {openEmoji, setOpenEmoji} = useGlobalState();

    // take input value
    const [thought, setThought] = useState('');

    // on input change
    const handleChange = (e) => {
        setThought(e.target.value);
    }

    const handleEmoji = (emojiObject) => { 
        setThought(prevThought => prevThought + emojiObject.emoji); 
    }  

    return <>

        <div className="chat" onClick={() => {
                if (openEmoji) {
                    setOpenEmoji(false)
                }
            }}>
            <div className="chatnavbar">
                <div className="chatprofile">
                    <img src={user.profileImage} alt="" />
                    <div className="details">
                        <span>{user.username}</span>
                        <span>Active 2h ago</span>
                    </div>
                </div>

                <div className="chatoptions">
                    <IoIosCall className='icon' />
                    <TbVideo className='icon' />
                    <IoInformationCircleOutline className='icon' />
                </div>
            </div>

            <div className="chatwindow">
                <div className="user">
                    <img src={user.profileImage} alt="" />
                    <span>{user.username}</span>
                    <button>View profile</button>
                </div>
            </div>

            <div className="chatinput">
                    <GrEmoji onClick={() => {setOpenEmoji(!openEmoji)}} className='icon'></GrEmoji>
                    <input onChange={handleChange} type="text" placeholder='Message...' value={thought} />

                    {
                        thought !== '' ? <button>Send</button> : <div>
                            <FaMicrophone className='icon' />
                            <FaRegImage className='icon' />
                            <FaRegHeart className='icon' />
                        </div>
                    }

                    {
                        openEmoji && <EmojiPicker className='emojipicker' theme='dark' searchDisabled={true}  onEmojiClick={handleEmoji} />
                    }
                    
            </div>
            

        </div>
    
    </>
}

export default Chat