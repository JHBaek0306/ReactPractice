import { useState, useEffect } from "react";
import { fetchWeather } from "../utils/api";
import { WeatherData } from "../types/weather";

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeather(city);
        setWeather(data);
      } catch (err) {
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    if (city) getWeather();
  }, [city]);

  return { weather, loading, error };
};
