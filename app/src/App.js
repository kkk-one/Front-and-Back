import React, { useState } from 'react';
import { fetchHistory, postNickname } from './api';
import './App.css';
import {Footer} from "./components/Footer/Footer";

function App() {
  const [nickname, setNickname] = useState('');
  const [history, setHistory] = useState([]);

  const handleNicknameSubmit = async (event) => {
    event.preventDefault();
    const result = await postNickname(nickname);
    console.log(result); // Обработайте результат как необходимо
  };

  const handleFetchHistory = async () => {
    const historyData = await fetchHistory();
    setHistory(historyData);
  };

  return (
    <div className="App">
      <form onSubmit={handleNicknameSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Введите никнейм"
        />
        <button type="submit">Отправить</button>
      </form>
      <button onClick={handleFetchHistory}>Получить историю</button>
      <Footer />
    </div>
  );
}

export default App;
