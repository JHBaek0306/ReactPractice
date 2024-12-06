import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string }[];
}

const App = () => {
  const [city, setCity] = useState<string>('Seoul');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const API_KEY = 'ede253c30d8514effb092f590fdd98a5';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = () => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (favoriteCity: string) => {
    setFavorites(favorites.filter((fav) => fav !== favoriteCity));
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="app">
      <h1>Weather App</h1>

      {/* Search Section */}
      <div>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => fetchWeather(city)}>Search</button>
      </div>

      {/* Loading and Error */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Weather Display */}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
          <button onClick={addFavorite}>Add to Favorites</button>
        </div>
      )}

      {/* Favorites Section */}
      <div>
        <h3>Favorites</h3>
        <ul>
          {favorites.map((fav) => (
            <li key={fav}>
              {fav}
              <button onClick={() => fetchWeather(fav)}>View</button>
              <button onClick={() => removeFavorite(fav)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
