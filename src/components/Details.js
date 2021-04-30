import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import styled from 'styled-components'



export default function Details(props){
   
    const { data } = props;
    const Container = styled.div`
    display: flex;
    background-image: url('https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/m33.png');
    color: gold;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: justify;
    flex-direction: column;
    padding: 45px;
    border: 5px solid navy;
    border-top: 0px;
    width: 853px;
    `
    const Explanation = styled.span`
    background-color: black;
    border-radius: 15px;
    padding: 40px;
    opacity: 0.6;
    `
   
    return(
    <Container>
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
        <Explanation>{data.explanation}</Explanation>
    </Container>
    );
}
