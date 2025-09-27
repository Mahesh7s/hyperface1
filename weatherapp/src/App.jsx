
import './App.css'

import { useState } from "react";
import useFetch from "./hooks/useFetch";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const API_KEY = "bb5a121570552dd323042a9339248863"; 

function App() {
  const [city, setCity] = useState("");

  const apiUrl = city
    ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    : null;

  const { data, loading, error } = useFetch(apiUrl);

  return (
    <div>
      <h1> QuickWeather</h1>
      <SearchBar onSearch={setCity} />
      <WeatherDisplay data={data} loading={loading} error={error} />
    </div>
  );
}

export default App;
