import React, { useState } from 'react';

const Proj = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cf058425f2ac68c49a8643444ba2b2fc`
      );
      if (!response.ok) {
        throw new Error('City not found!');
      }

      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' , width:"100%" , height:"100vh" , display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" }}>
      <h2>🌤 Weather</h2>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={handleChange}
        value={city}
      />
      <button onClick={handleClick}>Get City Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>🌥 Weather: {weather.weather[0].main}</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Proj;
