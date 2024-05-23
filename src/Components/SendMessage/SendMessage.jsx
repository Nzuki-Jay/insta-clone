import './SendMessage.scss';
import { UserData } from '../../Data/users';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../GlobalState';

const SendMessages = ({setRemoveDefault}) => {

    // query
    const [query, setQuery] = useState('');

    // input on change

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    // store selected account
    const [selectedUser, setSelectedUser] = useState(null);

    // global states
    const {setActiveOverlays, setOpenSendMessages} = useGlobalState()

    return <>
        <div className="sendmessages">
            <h1 className="header">
                New message
            </h1>

            <hr></hr>

            <div className="input">
                <span>To:</span>
                {
                    selectedUser && 
                        <div className="selected">
                            <span>{selectedUser.username}</span>
                            <LiaTimesSolid className='removeselected' onClick={() => {setSelectedUser(null)}} />
                        </div>
                }
                <input type='text' placeholder='Search...' onChange={handleChange} value={query} />
            </div>

            <hr></hr>

            <div className='results'>
                {
                    query === '' ? <p>No accounts Found</p> :  
                        UserData.slice(1).map((user) => (
                            <div onClick={() => {
                                setSelectedUser(user)
                            }} className='account'>
                                <div className="info">
                                    <img src={user.profileImage} alt="" />
                                    <span>{user.username}</span>
                                </div>
                                <button className={selectedUser &&  selectedUser.id === user.id && 'active'}>
                                    {
                                        selectedUser && selectedUser.id === user.id && <FaCheck  className='icon'/>
                                    }
                                </button>
                            </div>
                        ))       
                }
            </div>

            <Link onClick={() => {
                setActiveOverlays(false)
                setOpenSendMessages(false)
                setRemoveDefault(false)
            }} className={`chatlink ${selectedUser ? 'active' : ''}`} to={`/messages/chat/${selectedUser ? selectedUser.id : null}`}>
                <span>Chat</span>
            </Link>

            <LiaTimesSolid className='removesendmessages' onClick={() => {
                setActiveOverlays(false)
                setOpenSendMessages(false)
            }}/>
        </div>
    
    </>
}

export default SendMessages