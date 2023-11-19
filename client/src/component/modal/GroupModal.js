import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../../css/GroupModal.css"

const AddGroup = (props) => {
    const [cadets, setCadets] = useState([])
    const id = props.id

    useEffect(() => {
        if (id !== 0) {
            axios.get(`http://localhost:2222/api/v1/groups/${id}`, {withCredentials: true}).then(res => {
                setCadets(res.data.cadets)
            })
        }
    }, [id])

    // Если props.show равно false, то модальное окно не показывается
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
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
            </div>
        </div>
    );
};

export default AddGroup;