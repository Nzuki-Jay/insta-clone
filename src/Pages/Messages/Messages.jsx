import './Messages.scss';
import { Link, Outlet } from 'react-router-dom';
import { UserData } from '../../Data/users';
import { FaRegEdit } from "react-icons/fa";
import { useGlobalState } from '../../GlobalState';
import { useEffect, useState } from 'react';
import { RiMessengerLine } from "react-icons/ri";
import SendMessages from '../../Components/SendMessage/SendMessage';

const Messages = () => {

    const {setPage, setActiveNavbar, openSendMessages, setOpenSendMessages, setActiveOverlays} = useGlobalState();

    // when the chat is  active, remove default page
     const [removeDefault, setRemoveDefault] = useState(true);


    useEffect(() => {
        setPage('messages');
        setActiveNavbar(true);
    })

    return <>
       <div className="messages">
        <div className="leftside">
            <div className="leftTop">
                <span>
                {UserData[0]?.username}
                </span>
                <FaRegEdit onClick={() => {
                    setActiveOverlays(true)
                    setOpenSendMessages(true)}} className='icon' />
            </div>
            <div className="leftBottom">

                <div className="messagesheader">
                    <span>Messages</span>
                    <span>Requests</span>
                </div>

                {UserData.slice(1).map((user) => (

                    <Link className="messagesProfile" key={user.id} to={`/messages/chat/${user.id}`}>
                        <div onClick={() => {setRemoveDefault(false)}} className='profdiv'>
                            <div className="img">
                                <img src={user.profileImage} alt="" />
                            </div>
                            <div className='div'>
                                <span>{user.username}</span>
                                <span>Active 1h ago</span>
                            </div>
                        </div>
                    </Link>
                    
                ))}
            </div>
        </div>

        <div className="rightside">
            {
                removeDefault ? <div className="default">
                    <div className='messengerIcon'>
                        <RiMessengerLine />
                    </div>
                    <span>Your Messages</span>
                    <p>Send a message to start a chat.</p>
                    <button onClick={() => {
                        setActiveOverlays(true)
                        setOpenSendMessages(true)
                        }}>Send Message</button>

                </div> : <Outlet /> 
            }
        </div>

    </div>

    {
        openSendMessages && <SendMessages setRemoveDefault={setRemoveDefault} /> 
    }
    
    </>
}

export default Messages