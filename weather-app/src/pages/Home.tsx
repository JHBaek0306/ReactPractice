import React, { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import CitySearch from "../components/CitySearch";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";

const Home: React.FC = () => {
    const [city, setCity] = useState<string>("Seoul");
    const { weather, loading, error } = useWeather(city);

    return (
        <div>
            <h1>Weather App</h1>
            <CitySearch onSearch={setCity} />
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
};

export default Home;
