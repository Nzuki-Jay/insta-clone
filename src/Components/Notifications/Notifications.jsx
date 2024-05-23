import { useGlobalState } from '../../GlobalState';
import './Notifications.scss';
import { NotificationData } from '../../Data/extra';
import Notification from '../Notitification/Notification';


const Notifications = () => {

    const {openNotifications} = useGlobalState();

    // categorize notifications by time

    const daily = NotificationData.filter((note) => note.createdat === "today");
    const yesterday = NotificationData.filter((note) => note.createdat === "yesterday");
    const weekly = NotificationData.filter((note) => note.createdat === "week");
    const monthly = NotificationData.filter((note) => note.createdat === "month");

    return <>
        <div className={`notifications ${openNotifications ? 'active' : ''}`}>
            <h1>Notifications</h1>
            <div className='div'>
                <span className='header'>Today</span>
                {
                    daily.map((note, id) => {
                        return <Notification key={id} notification={note} />
                    })
                }

            </div>

            <div className='line'></div>

            <div className='div'>
                <span className='header'>Yesterday</span>
                {
                    yesterday.map((note, id) => {
                       return <Notification key={id} notification={note} />
                    })
                }

            </div>

            <div className='line'></div>

            <div className='div'>
                <span className='header'>This Week</span>
                {
                    weekly.map((note, id) => {
                        return  <Notification key={id} notification={note} />
                    })
                }

            </div>

            <div className='line'></div>

            <div className='div'>
                <span className='header'>This Month</span>
                {
                    monthly.map((note, id) => {
                        return <Notification key={id} notification={note} />
                    })
                }

            </div>
            
        </div>
    
    </>
}

export default Notifications