import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { createContext, useState } from 'react';

export const AppContext=createContext();
function App() {
  const [userName,setUserName]=useState("yaswanth");
  return (
    <div className="App">
      <AppContext.Provider value={{userName,setUserName}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
