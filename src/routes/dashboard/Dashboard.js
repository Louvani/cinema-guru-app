import './dashboard.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';

function Dashboard({ userUsername, setIsLoggedIn }) {
    return(
        <BrowserRouter>
            <div className="Dashboard">
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <SideBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/favorites" element={<Favorites />} />
                    <Route path="/watchlater" element={<WatchLater />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                    
            </div>
        </BrowserRouter>
    )
}

export default Dashboard;
