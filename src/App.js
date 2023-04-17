import './App.css';
import Navbar from './Navbar'
import Login from './Login'
import { useState } from 'react'

function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <div className="app">
      <Navbar userInfo={userInfo} />
      <Login setUserInfo={setUserInfo} />
    </div>
  )
}

export default App;


