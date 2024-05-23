import { useGlobalState } from '../../GlobalState';
import './AddProfileImg.scss';
import { useRef, useState } from 'react';


const AddImage = ({setOpenAddProfImg}) => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const {setActiveOverlays} = useGlobalState();


    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click(); 
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles(files);
        localStorage.setItem('files', JSON.stringify(selectedFiles));
    };

    return <>
        <div className='addImage'>
            <span>Change Profile Photo</span>
            <input onChange={handleFileChange}  multiple  ref={fileInputRef}  style={{display: 'none'}} type="file" placeholder='Upload Photo'/>
            <button onClick={handleButtonClick} className='fileBtn'>Upload Photo</button>
            <p>Remove Current Photo</p>
            <button onClick={() => {
                setOpenAddProfImg(false)
                setActiveOverlays(false)
            }}>
                Cancel
            </button>
        </div>
    
    </>
}

export default AddImage