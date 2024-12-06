const API_KEY = "ede253c30d8514effb092f590fdd98a5";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
  };
};
