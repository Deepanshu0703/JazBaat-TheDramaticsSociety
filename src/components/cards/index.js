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
              <a href="https://www.youtube.com/user/jazbaatiiitdmj"><span>Performances</span><span>Performances</span></a>
            </div>
          </div>
        ))}
        <div className="quote_section">
          <p>आ काट ले पर तू बन जा क़ैदी हो जा तू पिंजरे में बंद, ये शब्द है किसके कैसी भाषा कैसी मान ले मेरी बातें बस।</p>
        </div>
      </div>
      )
};
export default Cards;