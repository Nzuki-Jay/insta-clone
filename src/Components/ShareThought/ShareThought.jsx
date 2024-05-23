import './Share Thought.scss'
import { UserData } from '../../Data/users.js';
import { useGlobalState } from '../../GlobalState.jsx';
import { GrEmoji } from "react-icons/gr";
import { FaTimes } from "react-icons/fa"
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const ShareThought = () => {
    const {openEmoji, setOpenEmoji, setActiveOverlays, setOpenShareThought} = useGlobalState();
    const [thought, setThought] = useState();
    const [buttonActive, setButtonActive] = useState(false);

    const handleInput = (e) => {
        setButtonActive(true);
        setThought(e.target.value);
    }

    const handleEmoji = (emojiObject) => {
        setThought(thought + emojiObject.emoji);
    }

    return <>
        <div className='shareThought'>
            <span>New Thought.</span>
            <div className='form'>
                <img src={UserData[0].profileImage} alt="" />

                <form>
                    <input className='input' type='text' placeholder='Share a thought' value={thought} 
                        onChange={handleInput}  />
                    <div onClick={() => {setOpenEmoji(!openEmoji)}} className='emoji'>
                        <GrEmoji />
                    </div>
                    
                    <button className={buttonActive ? 'active' : ""} type='submit'> 
                        Share         
                    </button>
                    {
                        openEmoji && <EmojiPicker className='emojipicker' theme='dark' searchDisabled={true}  onEmojiClick={handleEmoji} />
                    }
                </form>
            </div>
            <FaTimes className='close' onClick={() => {
                setOpenShareThought(false)
                setActiveOverlays(false)
                }} />
            
        </div>     
  
    </>
}

export default ShareThought