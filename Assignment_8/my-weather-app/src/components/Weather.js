import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const Weather = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
        <p>Temprature: {weatherData.main.temp}</p>
        <p>Sunrise: {weatherData.sys.sunrise}</p>
        <p>Sunset: {weatherData.sys.sunset}</p>
        <p>Description: {weatherData.weather[0].description}</p>
    </Card.Content>
  </Card>
)

export default Weather;