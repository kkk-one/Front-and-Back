import React, { useState, useEffect } from 'react';
import './HistoryPage.css';

const HistoryPage = () => {
  const [historyRecords, setHistoryRecords] = useState([]);

useEffect(() => {
  const fetchHistoryRecords = async () => {
    try {
      const response = await fetch('http://localhost:8007/history');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      const data = result.history_records;
      if (Array.isArray(data)) {
        setHistoryRecords(data);
      } else {
        console.error('Полученные данные не являются массивом:', data);
      }
    } catch (error) {
      console.error('Возникла проблема с вашим fetch запросом: ', error);
    }
  };

  fetchHistoryRecords();
}, []);

return (
  <div>
    <h1>История запросов</h1>
    <table className="table">
      <thead>
        <tr>
          <th className="thtd"># Запроса</th>
          <th className="thtd">Дата и время запроса</th>
          <th className="thtd">Nickname</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(historyRecords) && historyRecords.length > 0 ? (
          historyRecords.map((record) => (
            <tr key={record.request_id}>
              <td className="thtd">{record.request_id}</td>
              <td className="thtd">{record.request_date}</td>
              <td className="thtd">{record.nickname}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="thtd">Нет данных для отображения</td>
          </tr>
        )}
      </tbody>
    </table>
    <br/>
    <button onClick={() => window.location.href = '/'} className={"button"}>Вернуться к поиску</button>
  </div>
);
};

export default HistoryPage;
