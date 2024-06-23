import React, { useState } from 'react';
import { fetchHistory, postNickname } from './api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HistoryPage from './HistoryPage';
import LoginPage from './LoginPage';
import './App.css';
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Helmet } from 'react-helmet';

function App() {
  const [nickname, setNickname] = useState('');
  const [history, setHistory] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState(''); // Добавлено состояние для сообщения
  const [result, setResult] = useState(null); // Добавлено состояние для результата с сервера

  const handleNicknameSubmit = async (event) => {
    event.preventDefault();
    setMessage('Запрос отправлен'); // Установка сообщения при отправке формы
    setTimeout(() => setMessage(''), 5000); // Сообщение исчезнет через 5 секунд
    const result = await postNickname(nickname);
    setResult(result); // Сохранение результата в состояние
    console.log(result);
  };

  const handleFetchHistory = async () => {
    const historyData = await fetchHistory();
    setHistory(historyData);
  };

  const handleLogin = (username, password) => {
    console.log('Попытка входа с именем пользователя:', username);
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <div className="search-text">Вы можете произвести поиск аккаунтов в проекте "Мир танков".</div>
              <div className="form-container">
                <form onSubmit={handleNicknameSubmit} className="nickname-form">
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Введите никнейм"
                  />
                  <button type="submit" className="submit-button">Отправить</button>
                </form>
                {message && <div className="message">{message}</div>} {/* Отображение сообщения */}
              </div>
              {isAuthenticated && (
                <>
                  <button onClick={handleFetchHistory}>Получить историю</button>
                  {result && <div className="result">{JSON.stringify(result)}</div>} {/* Отображение результата */}
                </>
              )}
            </>
          }/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/history" element={<HistoryPage history={history} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
