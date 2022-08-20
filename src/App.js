import axios from 'axios';
import { useEffect, useState } from 'react';

import Authentication from './routes/auth/Authentication';
import './App.css';

export const URL_API = 'http://localhost:8000'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userUsername, setUserUsername] = useState("")

  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken');
    axios.post(
      `${URL_API}/api/auth/`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setIsLoggedIn(true);
        setUserUsername(data.username)
      })
      .catch((error) => console.log(error))
  })
  return (
    <div className="App light-section">
      {!isLoggedIn ? (
        <Authentication setIsLoggedIn={setIsLoggedIn} setUserUsername={setUserUsername} />
      ) : (
        <h1>Dashboard</h1>
      )}
    </div>
  );
}

export default App;
