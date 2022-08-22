import axios from 'axios';

import { Component } from 'react';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faClock, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Activity from '../Activity';
import { URL_API } from '../../App';
import './navigation.css'

const pages = {
    "Home": {"name": "Home", "path": "/home", "icon": faFolder},
    "Favorites": {"name": "Favorites", "path": "/favorites", "icon": faStar},
    "Watch Later": {"name": "Watch Later", "path": "/watchlater", "icon": faClock},
}

function SideBar() {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();



    const setPage = (pageName) => {
        setSelected(pageName);
        navigate(pages[pageName]["path"]);
    }

    const handleMouseOver = () => {
        setSmall(false);
    };

      const handleMouseOut = () => {
        setSmall(true);
    };


    // UseEfect

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios
          .get(`${URL_API}/api/activity`, {
            headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
            params: {},
          })
          .then((res) => res.data)
          .then((data) => {
            setActivities(data);
            if (data.length > 0) setShowActivities(true);
          })
          .catch((err) => console.err(err));
      }, []);


    return(
        <nav className={`sideBar ${small ? 'small' : ''}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <ul className="navigation-sideBar">
                {Object.keys(pages).map((key, index) => {
                    return(
                        <li className={`${selected === pages[key]["name"] ? 'selected-page' : ''}`}
                            onClick={() => setPage(pages[key]["name"])}
                            key={index}>
                            <FontAwesomeIcon icon={pages[key]["icon"]} />
                            <span className="text-sideBar">{pages[key]["name"]}</span>
                            {selected === pages[key]["name"] && !small && <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />}
                        </li>
                    )
                })}
            </ul>
            {showActivities && (
                <ul className="sideBar-activities">
                    <span className="title-activities">Latest Activities</span>
                    {activities.slice(0, 10).map((activity) => (
                        <Activity props={activity} />
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default SideBar;
