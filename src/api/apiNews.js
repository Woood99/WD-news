import axios from 'axios';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
   try {
      const response = await axios(`${BASE_URL}latest-news`, {
         params: {
            apiKey: API_KEY,
            language: 'ru',
         },
      });
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
