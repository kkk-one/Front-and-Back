import React from 'react';
import './HistoryPage.css'; // Импортируйте новый CSS файл

const HistoryPage = ({ historyRecords }) => {
  return (
    <div>
      <h1>История запросов</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="thtd">ID</th>
            <th className="thtd">Даты и время запроса</th>
            <th className="thtd">Nickname</th>
          </tr>
        </thead>
        <tbody>
          {historyRecords.map((record) => (
            <tr key={record.request_id}>
              <td className="thtd">{record.request_id}</td>
              <td className="thtd">{record.request_date}</td>
              <td className="thtd">{record.nickname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
        <button onClick={() => window.location.href = '/'} className={"button"}>Вернуться к поиску</button>
    </div>
  );
};

export default HistoryPage;