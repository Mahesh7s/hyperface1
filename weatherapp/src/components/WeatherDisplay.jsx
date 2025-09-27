import React from "react";

const WeatherDisplay = React.memo(({ data, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>Search for a city to see the weather</p>;

  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>{Math.round(data.main.temp)}°C</p>
      <p>{data.weather[0].main}</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
    </div>
  );
});



export default WeatherDisplay;
