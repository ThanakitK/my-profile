
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import React, { useEffect } from 'react'
import { Home } from './Page/Home';
import { Profile } from './Page/Profile';


function App() {
  useEffect(() => {
    document.title = 'My Profile';
  }, []);
  return (
    <Router>
        <Routes>
          <Route expect path = '/' element={<Home/>}/>
          <Route path = '/profile' element={<Profile/>}/>
        </Routes>
      </Router>
  );
}

export default App;
