import axios from 'axios';
//export const baseUrl = 'https://bayut.p.rapidapi.com'

export const baseUrl = process.env.NEXT_PUBLIC_RAPIDAPI_HOST


/*
// fetchApi.js
export const fetchApi = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd78b7a7727msh8005a1184fe9420p131252jsn27998a41f51a',
		'x-rapidapi-host': 'bayut.p.rapidapi.com'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call error:", error);
  }
};
*/



export const fetchApi = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call error:", error);
  }
};


 