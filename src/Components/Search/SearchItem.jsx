import { FaTimes } from 'react-icons/fa';
import './SearchItem.scss';
import { useState } from 'react';

const SearchItem = ({item}) => {
    const [removeItem, setRemoveItem] = useState(false);

    return <>
        <div className={`searchItem ${removeItem && 'active'}`}>
            <div>
                <img src={item.profileImage} alt="" />
                <p>{item.username}</p>
            </div>
            <FaTimes onClick={() => {
                setRemoveItem(true)
            }}  className='removeBtn' />
           
        </div>
    </>
}

export default SearchItem