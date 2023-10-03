import React from "react";

const Cards = ({eventInfo})=>{
    return (
      <div className="events">
      <h1>Events</h1>
        {eventInfo.map((info)=>(
          <div className="event-card" key={info.id}>
            <div className="card" >
              <div className="card-bg" style={{
                backgroundImage: `url(${info.dataImage})`
              }}>
              </div>
            </div>
            <div className="card-info">
              <h1>{info.header.split("").map((word,index)=>{
                return <span className="popUpLetter" key={index}>{word}</span>
              })}</h1>
              <p >{info.description}</p>
              <a href="/"><span>Performances</span><span>Performances</span></a>
            </div>
          </div>
        ))}
      </div>
      )
};
export default Cards;