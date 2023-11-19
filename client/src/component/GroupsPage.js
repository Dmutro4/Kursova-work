import React, {useEffect, useState} from 'react';
import '../css/GroupPage.css'
import AddGroup from "./modal/AddGroup";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const GroupsPage = () => {
    const [addVisible, setAddVisible] = useState(false);
    const [groups, setGroups] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:2222/api/v1/groups/', {withCredentials: true}).then(res => {
            setGroups(res.data)
        }).catch(e => {
            console.log(e)
        })
    }, [])

    return (
        <div className={'group-page'}>
            <div style={{fontSize: 25}}>Список наявних груп</div>
            <div className={'group-page-container'}>
                {groups.map(g => (
                    <div className={'group-page-item'} onClick={() => navigate(`/groups/${g.id}`)} key={g.id}>
                        <div>{g.number}</div>
                    </div>
                ))}

            </div>
            <div className={'group-page-button'}>
                <button onClick={() => setAddVisible(true)}>Додати групу</button>
                <AddGroup show={addVisible} onClose={() => setAddVisible(false)}/>
            </div>
        </div>
    );
};

export default GroupsPage;