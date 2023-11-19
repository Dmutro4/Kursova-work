import React, {useEffect, useState} from 'react';
import '../css/CadetsPage.css'
import {useParams} from "react-router-dom";
import axios from "axios";
import AddCadet from "./modal/AddCadet";

const GroupPage = () => {
    const [cadets, setCadets] = useState([])
    const {id} = useParams()
    const [addVisible, setAddVisible] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:2222/api/v1/groups/${id}`, {withCredentials: true}).then(res => {
            setCadets(res.data.cadets)
        })
    }, [])

    return (
        <div>
            <div className={"cadet-page-container"}>
                <div className={"cadet-page-title"}>Список курсантів</div>
                <div className={"cadet-page-table"}>
                    <div className={"cadet-page-table-l1"}>
                        <div>№</div>
                        <div>Прізвище</div>
                        <div>Ім'я</div>
                        <div>По-батькові</div>
                        <div>Звання</div>
                    </div>
                    {cadets.map((с, index) => (
                        <div className={"cadet-page-table-l2"} key={с.id}>
                            <div>{index}</div>
                            <div>{с.surname}</div>
                            <div>{с.name}</div>
                            <div>{с.lastname}</div>
                            <div>{с.rank}</div>
                        </div>
                    ))}
                </div>
                <div className={'group-page-button'}>
                    <button onClick={() => setAddVisible(true)}>Додати курсанта</button>
                    <AddCadet show={addVisible} id={id} onClose={() => setAddVisible(false)}/>
                </div>
            </div>
        </div>
    );
};

export default GroupPage;