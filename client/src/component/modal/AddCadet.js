import React, {useState} from 'react';
import axios from "axios";
import "../../css/Modal.css"

const AddCadet = (props) => {
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [rank, setRank] = useState('');

    const handleSubmit = (event) => {
        const groupId = props.id
        axios.post('http://localhost:2222/api/v1/cadets/', {surname, name, lastname, rank, groupId}, {withCredentials: true}).then((response) => {
            alert('Курсанта успішно додано');
            window.location = `/groups/${groupId}`
            // Добавить здесь код для обработки успешной отправки данных
        }).catch((error) => {
            alert('Помилка при відправці данних');
            // Добавить здесь код для обработки ошибки отправки данных
        })
        event.preventDefault();
        // Действия при отправке формы
        setSurname('');
        setName('');
        setLastname('');
        setRank('');
        props.onClose(); // Закрытие модального окна
    };

    // Если props.show равно false, то модальное окно не показывается
    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <label>
                        Прізвище:
                        <input type="text" value={surname}
                               onChange={(event) => setSurname(event.target.value)}/>
                    </label>
                    <label>
                        Ім'я:
                        <input type="text" value={name}
                               onChange={(event) => setName(event.target.value)}/>
                    </label>
                    <label>
                        По-батькові:
                        <input type="text" value={lastname}
                               onChange={(event) => setLastname(event.target.value)}/>
                    </label>
                    <label>
                        Звання:
                        <input type="text" value={rank}
                               onChange={(event) => setRank(event.target.value)}/>
                    </label>
                    <button type="submit">Додати</button>
                </form>
            </div>
        </div>
    );
};

export default AddCadet;