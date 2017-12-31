import axios from 'axios';

const API_KEY = '2c7e4bdb8c17e7bca2cba1c88f2fcca8';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY_CODE = 'us';

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${BASE_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
