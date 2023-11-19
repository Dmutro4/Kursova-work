import React, {useState} from 'react';
import '../css/NavBar.css'
import {useNavigate} from "react-router-dom";


const NavBar = () => {

    const [user, setUser] = useState('')
    const navigate = useNavigate()
    return (
        <div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item"><a href="/groups">Групи</a></li>
                    <li className="nav-item"><a href="/duty">Наряди</a></li>
                    <div className="nav-panel">
                        <button className="_button" onClick={() => navigate('/login')}>Авторизація</button>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar