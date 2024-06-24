import React, { useState } from 'react';
import { fetchHistory, postNickname } from './api';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
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
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const handleNicknameSubmit = async (event) => {
    event.preventDefault();
    setMessage('Отправка данных...');
    try {
      const response = await postNickname(nickname);
      if (response.ok) {
        const result = await response.json();
        setResult(result);
        setMessage('Данные успешно получены');
      } else {
        setMessage('Ошибка при отправке данных: ' + response.status);
      }
    } catch (error) {
      setMessage('Ошибка при отправке данных');
      console.error('Ошибка при отправке данных:', error);
    }
    setTimeout(() => setMessage(''), 5000);
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
                {message && <div className="message">{message}</div>}
                {result && <div className="result">{JSON.stringify(result)}</div>}

              </div>
              {isAuthenticated && (
                <>
                  <Link to={"/history"}>
                  <button onClick={handleFetchHistory}>Получить историю</button>
                  </Link>
                  {result && <div className="result">{JSON.stringify(result)}</div>}
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
