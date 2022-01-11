import axios from 'axios';


const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "00304a759057313cab4f6ea1d8de5ace";
 
export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};