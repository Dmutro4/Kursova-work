import React, {useState} from 'react';
import axios from "axios";
import "../../css/Modal.css"

const AddDuty = (props) => {
    const [date_of_substitution, setDate_of_substitution] = useState('');
    const [groupId, setGroupId] = useState(0);

    const handleSubmit = (event) => {
        axios.post('http://localhost:2222/api/v1/duties/', {date_of_substitution, groupId}, {withCredentials: true}).then((response) => {
            alert('Наряд успішно додано');
            window.location = `/duty`
            // Добавить здесь код для обработки успешной отправки данных
        }).catch((error) => {
            alert('Помилка при відправці данних');
            // Добавить здесь код для обработки ошибки отправки данных
        })
        event.preventDefault();
        // Действия при отправке формы
        setDate_of_substitution('');
        setGroupId(0);
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
                        <input type="date" value={date_of_substitution}
                               onChange={(event) => setDate_of_substitution(event.target.value)}/>
                    </label>
                    <select  className={'modal-select'} value={groupId} onChange={event => setGroupId(event.target.value)}>
                        <option value=""></option>
                        {props.groups.map((g) => (
                            <option key={g.id} value={g.id}>
                                {g.number}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Додати</button>
                </form>
            </div>
        </div>
    );
};

export default AddDuty;