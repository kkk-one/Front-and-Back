import axios from 'axios';

const API_BASE_URL = `http://localhost:8007`;

export const fetchHistory = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/history`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении истории запросов:', error);
  }
};

export const postNickname = async (nickname) => {
  const response = await fetch('http://localhost:8007/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nickname: nickname })
  });
  return response;
};
