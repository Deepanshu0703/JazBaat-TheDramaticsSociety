import React from "react";
import styled from "styled-components";

const EventsHeader = styled.div`
    display: block;
    text-align: center;
    color: hsl(0, 0%, 28%);
    font-size: 100px;
    font-weight: 700;
    letter-spacing: 5px;
    cursor: pointer;
    margin-top: 5%;
    text-transform: uppercase;
    background: linear-gradient(to right, hsl(42, 82%, 72%) 0, hsl(58, 90%, 72%) 10%, hsl(42, 99%, 50%) 20%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 4s infinite linear;

    @keyframes shine {
        0% {
          background-position: 0;
        }
        60% {
          background-position: 60vw;
        }
        100% {
          background-position: 100vw;
        }
      }
    @media (width<=550px){
      font-size: 17vw;
      animation: shine 6s infinite linear;
    }
`;

export function EventsHead(props){
    return(
      <span className="events">
        <EventsHeader>Events</EventsHeader>
      </span>
    )
}

