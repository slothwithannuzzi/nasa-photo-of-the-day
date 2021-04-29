import React, { useState, useEffect } from "react";
import "../App.css";
import axios from 'axios';
import styled from 'styled-components'

export default function Image(props) {
    
    const { img, type } = props;
    
    const videoContent = (
        <iframe
          width="853"
          height="480"
          src={img}
          frameBorder="3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      )
      
      const imageContent = (
        <img src = {img}/>
      )

      const Container = styled.div`
      width: 853px;
      padding: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: navy;
      `

      return (
        <Container>
            {(type === 'video') ? videoContent : imageContent}
        </Container>
      );
}