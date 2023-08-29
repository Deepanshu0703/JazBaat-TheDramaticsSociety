import React, { useRef } from 'react';

export function About() {
    const aboutContent = "Step into a realm where stories ignite, emotions transcend, and norms crumble - welcome to our Institute's Biggest Cultural Club. We're not just drama enthusiasts; we're the architects of touching narratives, the symphony composers, and the magic - makers behind the scenes. From stage plays to street performances, solo acts to ensembles, we embrace it all. Our family thrives on diversity, welcoming seasoned performers and newcomers alike. As scripts come alive, melodies resonate, and characters bloom, we're more than a club - we're a movement that challenges conventions. Join us in redefining drama, where every act is a masterpiece and ordinary is left behind. This is our stage, our passion, and our creative journey - come, be a part of it.";
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