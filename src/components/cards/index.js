import React from "react";

const Cards = ({eventInfo})=>{
    return (
      <>
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
              <a href="/">Performances</a>
            </div>
          </div>
        ))}
      </>
      )
};
export default Cards;