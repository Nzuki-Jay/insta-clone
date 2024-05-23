import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import ProfilePosts from './Pages/profilePosts/profilePosts';
import Tagged from './Pages/Tagged/Tagged';
import Saved from './Pages/Saved/Saved';
import Explore from './Pages/Explore/Explore';
import Messages from './Pages/Messages/Messages';
import Chat from './Pages/Chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} /> 
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile" element={<ProfilePosts />} />
              <Route path="/profile/tagged" element={<Tagged />} />  
              <Route path="/profile/saved" element={<Saved />} />
            </Route> 
            <Route path="/explore" element={<Explore />} /> 
            <Route path="/messages" element={<Messages />}>
              <Route path="/messages/chat/:userId" element={<Chat />} /> 

            </Route>
          </Route>
        </Routes>
     
      </div>

    </BrowserRouter>
    
  );
}

export default App;
