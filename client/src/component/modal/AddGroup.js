import React, {useState} from 'react';
import axios from "axios";
import "../../css/Modal.css"

const AddGroup = (props) => {
    const [number, setNumber] = useState('');

    const handleSubmit = (event) => {
        axios.post('http://localhost:2222/api/v1/groups/', {number}, {withCredentials:true}).then((response) => {
            alert('Групу успішно додано');
            window.location = `/groups`
            // Добавить здесь код для обработки успешной отправки данных
        }).catch((error) => {
            alert('Помилка при відправці данних');
            // Добавить здесь код для обработки ошибки отправки данных
        })
        event.preventDefault();
        // Действия при отправке формы
        setNumber('');
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
                        Номер:
                        <input type="text" value={number}
                               onChange={(event) => setNumber(event.target.value)} />
                    </label>
                    <button type="submit">Додати</button>
                </form>
            </div>
        </div>
    );
};

export default AddGroup;