import React,{useEffect, useRef, useState} from 'react';
import Images from '../../assets/images';
import {IoMenu} from 'react-icons/io5';
import {FaTimes} from 'react-icons/fa';


const LandingPage=()=> {
    const gifRef = useRef(null);
    const imgRef = useRef(null);
    const landingRef = useRef(null);
    const [navBar, setNavBar] = useState(false);
    function navTo(className){
        return function(){
            document.querySelector(className).scrollIntoView({behavior:'smooth'});
            setNavBar(true);
        }
    }
    useEffect(()=>{
        if(landingRef.current!=null){
            landingRef.current.style.backgroundImage=`url(${Images.jazbaatBackground})`;
        }
        if(gifRef.current!=null)
            setTimeout(() => {
                gifRef.current.style.display='none';
                imgRef.current.style.display='block';
            }, 2000);
    },[])
    return(
        <div ref={landingRef} className='landing_page'>
            <div className="header">
                <div className="navbar">
                    <div className="jazbaat_logo">
                        <img src={Images.logo} alt="Jazbaat"/>
                    </div>
                    <div className="navIcon">
                        <span className="barIcon" onClick={()=>{setNavBar(!navBar)}}>{navBar?<FaTimes/>:<IoMenu/>}</span>
                        <div className={navBar?"side_nav":"hide"}>
                            <ul>
                                <li onClick={navTo('.events')}>EVENTS</li>
                                <li onClick={navTo('.gallery')}>GALLERY</li>
                                <li onClick={navTo('.team_section')}>TEAM</li>
                                <li onClick={navTo('.footer_section')}>CONTACT</li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li onClick={navTo('.events')}>EVENTS</li>
                            <li onClick={navTo('.gallery')}>GALLERY</li>
                            <li onClick={navTo('.team_section')}>TEAM</li>
                            <li onClick={navTo('.footer_section')}>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="jazbaat_banner">
                <div className="main_logo">
                    <img ref={imgRef} src={Images.main_logo} alt='main_logo' className='jazbaatLogoImg'/>
                    <img ref={gifRef} src={Images.jazbaatLoader} alt='jazbaat_gif' className='jazbaatLogoGif'/>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;