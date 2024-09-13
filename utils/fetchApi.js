import axios from 'axios';
export const baseUrl = 'https://bayut.p.rapidapi.com'


// fetchApi.js
export const fetchApi = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '650512665dmsh3a73f9cd58a10a8p13d1e7jsnb8dc8d07844a',
        'x-rapidapi-host': 'bayut.p.rapidapi.com'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call error:", error);
  }
};


 