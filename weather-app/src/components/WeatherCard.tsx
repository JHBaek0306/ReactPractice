import React from "react";
import { WeatherData } from "../types/weather";

interface Props {
    weather: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ weather }) => (
    <div>
        <h2>{weather.city}</h2>
        <img src={weather.icon} alt={weather.description} />
        <p>{weather.temperature}°C</p>
        <p>{weather.description}</p>
    </div>
);

export default WeatherCard;
