import axios from 'axios';

const API_BASE_URL = `http://localhost:8000`;

export const fetchHistory = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/history`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении истории запросов:', error);
  }
};

export const postNickname = async (nickname) => {
  try {
    const response = await fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname: nickname }) // Убедитесь, что поле 'nickname' включено в тело запроса
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json(); // или обработайте ответ, как требуется вашему приложению
  } catch (error) {
    console.error('Ошибка при отправке никнейма:', error);
  }
};
