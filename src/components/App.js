import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import Details from './Details';
import Image from './Image'
import styled from 'styled-components'

function App() {
  //gives the data state
  const [nasaData, setNasaData] = useState([])
 
useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=YEZG4qZ3rvr7zmxXY4rdqHco8nDzbqiLU1AtI1bV`)
  .then(({data}) => {
    setNasaData(data);
  })
  .catch(err => console.log(err))
}, [])
 
 console.log(nasaData)
 const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 50px;
 `

  return (
  <Container>
      <Image img = {nasaData.url} type = {nasaData.media_type}></Image>
      <Details data = {nasaData}></Details>
 </Container>
  );
}

export default App;
