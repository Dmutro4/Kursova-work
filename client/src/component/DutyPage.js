import React, { useEffect, useState } from 'react';
import '../css/DutyPage.css';
import axios from 'axios';
import GroupModal from './modal/GroupModal';
import AddDuty from './modal/AddDuty';

const DutyPage = () => {
  const [duties, setDuties] = useState([]);
  const [groups, setGroups] = useState([]);
  const [id, setId] = useState(0);
  const [addVisibleGroup, setAddVisibleGroup] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:2222/api/v1/groups/', { withCredentials: true })
      .then((res) => {
        setGroups(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      axios
        .get('http://localhost:2222/api/v1/duties/', { withCredentials: true })
        .then((res) => {
          setDuties(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [loading]);

  const handleDeleteDuty = (id) => {
    axios
      .delete(`http://localhost:2222/api/v1/duties/${id}`, { withCredentials: true })
      .then((res) => {
        // Успішно видалено на бекенді, оновлюємо місцевий стан (масив duties)
        setDuties((prevDuties) => prevDuties.filter((duty) => duty.id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  

  return (
    <div>
      <div className={'duty-page-container'}>
        <div className={'duty-page-title'}>Списки нарядів</div>
        <div className={'duty-page-table'}>
          <div className={'duty-page-table-l1'}>
            <div>№</div>
            <div>Група що заступає</div>
            <div>Дата заступання</div>
            <div>Видалити</div>
          </div>
          {duties.map((d, index) => (
            <div  key={d.id}>
            <div
              className={'duty-page-table-l2'}
              onClick={() => {
                setId(d.groupId);
                setAddVisibleGroup(true);
              }}
            >
              <div>{index + 1}</div>
              <div>{groups[d.groupId - 1].number}</div>
              <div>{d.date_of_substitution.split('T')[0]}</div>
            </div>

            <button onClick={() => handleDeleteDuty(d.id)}>Видалити</button>
            </div>
          ))}
        </div>
        <div className={'group-page-button'}>
          <button onClick={() => setAddVisible(true)}>Створити наряд</button>
          <AddDuty show={addVisible} groups={groups} onClose={() => setAddVisible(false)} />
        </div>
        <GroupModal show={addVisibleGroup} id={id} onClose={() => setAddVisibleGroup(false)} />
      </div>
    </div>
  );
};

export default DutyPage;
