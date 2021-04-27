import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  //gives the data state
  const [nasaData, setNasaData] = useState([])
  //uses state to determine what type of content is being displayed, whether it be an image or video
  const [contentType, setContentType] = useState('')
 
useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=YEZG4qZ3rvr7zmxXY4rdqHco8nDzbqiLU1AtI1bV`)
  .then(({data}) => {
    setNasaData(data);
    setContentType(data.media_type);
  })
  .catch(err => console.log(err))
}, [])

  const videoContent = (
    <iframe
      width="853"
      height="480"
      src={nasaData.url}
      frameBorder="3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  )

  const imageContent = (
    <img src = {nasaData.url}></img>
  )
 
 console.log(nasaData)

  return (
  <div className = 'container'>
      {(contentType === 'video') ? videoContent : imageContent}
      <h1>{nasaData.title}</h1>
      <h3>{nasaData.date}</h3>
      <span>{nasaData.explanation}</span>
 </div>
  );
}

export default App;
