import axios from 'axios';

export const loadLocation = async () => {
  try {
    console.log('📡 Отправка запроса на сервер...');
    const response = await axios.post(import.meta.env.VITE_LOCATION_URL, {
      method: 'data/loadLocation',
      params: [0]
    });
    console.log('📬 Ответ от сервера:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Ошибка при загрузке локаций:', error);
    throw error;
  }
};

