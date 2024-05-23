import { createContext, useState, useContext } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({children}) => {

    // controls all active overlays
    const [activeOverlays, setActiveOverlays] = useState(false);
    
    //controls the slidePost and OverlayPost components
    const [displayOverlayPost, setDisplayOverlayPost] = useState(null);

    // controls active links in the profile page
    const [profileActiveLink, setProfileActiveLink] = useState('profile');

    // controls the EmojiPicker component
    const [openEmoji, setOpenEmoji] = useState(false);

    // tracks postId added to the SlidePost component
    const [slidePostId, setSlidePostId] = useState();

    // tracks posts added to the SlidePost component
    const [slidePosts, setSlidePosts] = useState();

    // messages page overlays
    const [openSendMessages, setOpenSendMessages] = useState(false);

     // profile page overlays
     const [openShareThought, setOpenShareThought] = useState(false);
     const [openProfSettings, setopenProfSettings] = useState(false);
     const [openAddProfImg, setOpenAddProfImg] = useState(false);

    // track messages page
    const [page, setPage] = useState('');

    // track active navbar 
     const [activeNavbar, setActiveNavbar] = useState(false);

     // any active overlays 

     const removeOverlays = () => {
        setActiveOverlays(false);
        setOpenShareThought(false);
        setOpenAddProfImg(false);
        setopenProfSettings(false);
        setOpenSendMessages(false);
     }

     // open and close notifications overlay
     const [openNotifications, setOpenNotifications] = useState(false);

     // open and close search overlay
     const [openSearch, setOpenSearch] = useState(false);

    // ensure only one overlay is open at a time

    const controlNotificationsOverlay = () => {
        if (openSearch) {
            setOpenSearch(false);
            setActiveNavbar(false);
        }
    
        if (page === 'messages') {
            setActiveNavbar(true);
            setOpenNotifications(!openNotifications);
        } else {
            setOpenNotifications(!openNotifications);
            setActiveNavbar(!openNotifications);
        }
        
    };
    
    const controlSearchOverlay = () => {
        if (openNotifications) {
            setOpenNotifications(false);
            setActiveNavbar(false);
        }
    
        if (page === 'messages') {
            setActiveNavbar(true);
            setOpenSearch(!openSearch);
        } else {
            setOpenSearch(!openSearch);
            setActiveNavbar(!openSearch);
        }
    };

    // close searchoverlay and notificationsoverlay when the entire page is clicked

    const closeOverlays = () => {
        if (page === 'messages') {
            if (openSearch || openNotifications) {
                setOpenSearch(false);
                setOpenNotifications(false);
            }   

        } else {
            if (openSearch || openNotifications) {
                setOpenSearch(false);
                setOpenNotifications(false);
                setActiveNavbar(false);
            }   
        }
    }

    return <GlobalStateContext.Provider value={{
        displayOverlayPost,
        setDisplayOverlayPost,
        profileActiveLink,
        setProfileActiveLink,
        openEmoji,
        setOpenEmoji,
        slidePostId,
        setSlidePostId,
        slidePosts, 
        setSlidePosts,
        activeOverlays,
        setActiveOverlays,
        openShareThought,
        setOpenShareThought,
        openProfSettings, 
        setopenProfSettings,
        openAddProfImg, 
        setOpenAddProfImg,
        removeOverlays,
        activeNavbar,
        setActiveNavbar,
        openNotifications,
        setOpenNotifications,
        openSearch,
        setOpenSearch,
        page,
        setPage,
        controlNotificationsOverlay,
        controlSearchOverlay,
        closeOverlays,
        openSendMessages,
        setOpenSendMessages
    }}>
        {children}
    </GlobalStateContext.Provider>
}