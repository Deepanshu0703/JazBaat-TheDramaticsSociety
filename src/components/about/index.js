import React, { useRef } from 'react';

const About = () => {
    const aboutContent = 'The USP of life at IIITDMJ , at the heart of the institue is the drama club, Jazbaat. We have a lot to offer to the students in the field of dramatics like stage plays, street plays, mono-acts and mimes.Besides these we also have many more activties such as scripting, music-composition etc. which are  esssential to dramatics . While managing their hectic schedules and dramatics simaultenously, the members have consistently came out on top in several Competitions , and made us proud .We welcome everybody with open arms, So join us on this journey as once a  great man said "बाबूमोशाय...जिंदगी बड़ी होनी चाहिए, लंबी नहीं.."';
    const aboutRef= useRef();
    return (
        <div className='about' ref={aboutRef} >
            <h1>About Us</h1>
            <p>
            {
                aboutContent.split(" ").map((word,index)=>{
                    return <span className="highlightWord" key={index}>{word} </span>
                })
            }
            </p>
        </div>
    )
}

export default About;