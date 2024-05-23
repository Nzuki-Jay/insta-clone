import { FaTimesCircle } from 'react-icons/fa';
import './Search.scss';
import { UserData } from '../../Data/users';
import SearchItem from './SearchItem';
import { useGlobalState } from '../../GlobalState';
import { useState, useRef } from 'react';

const Search = () => {
    const {openSearch} = useGlobalState();

    // clear the search history
    const [clearSearchList, setClearSearchList] = useState(false);

    // on change display clear input button state
     const [clearField, setClearField] = useState(false);

    // on search input change
    const [query, setQuery] = useState('');
    const input = useRef(query);

    const onInputChange = () => {
        setQuery(input.value);
        setClearField(true)
    }

    // on change display clear input button

    const handleClick = () => {
        setQuery('');
        setClearField(false)
    }

    return <>
        <div className={`search ${openSearch ? 'active' : ''}`}>
            <h1>Search</h1>
            <div className="searchInput">
                <input onChange={onInputChange} ref={input} type='text' placeholder='Search' value={query}/>
                {clearField && <FaTimesCircle onClick={handleClick}  className='icon'/> }
            </div>
            <hr></hr>
            {
                clearSearchList ? <div className="emptysearchList">
                    <span>Recent</span>
                    <p>No recent Searches</p>
                </div> : <div className='searchList'>
                    <div className="header">
                        <span>Recent</span>
                        <span onClick={
                            () => {setClearSearchList(true)}
                        }>Clear all</span>
                    </div>
                    {
                        UserData.map((item) => (
                        <SearchItem item={item} key={item.id} />
                        ))
                    }
                </div>
            }
        </div>
    </>
}

export default Search