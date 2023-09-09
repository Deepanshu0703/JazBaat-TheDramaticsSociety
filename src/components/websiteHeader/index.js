import React,{useEffect, useRef, useState} from 'react';
import logo from '../../assets/images/Jazbaat_Name.png';
import main_logo from '../../assets/images/jazbaatMainLogo.png';
import jazbaatLoader from '../../assets/images/jazbaatMainGif.gif';
import jazbaatBackground from '../../assets/images/jazbaatBackground.jpg';
import {IoMenu} from 'react-icons/io5';
import {FaTimes} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage=()=> {
    const gifRef = useRef(null);
    const imgRef = useRef(null);
    const landingRef = useRef(null);
    const navigate = useNavigate();
    const [navBar, setNavBar] = useState(false);
    function navTo(className){
        return function(){
            document.querySelector(className).scrollIntoView({behavior:'smooth'});
            setNavBar(true);
        }
    }
    useEffect(()=>{
        if(landingRef.current!=null){
            landingRef.current.style.backgroundImage=`url(${jazbaatBackground})`;
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
                        <img src={logo} alt="Jazbaat"/>
                    </div>
                    <div className="navIcon">
                        <span className="barIcon" onClick={()=>{setNavBar(!navBar)}}>{navBar?<FaTimes/>:<IoMenu/>}</span>
                        <div className={navBar?"side_nav":"hide"}>
                            <ul>
                                <li onClick={navTo('.events')}>EVENTS</li>
                                <li>GALLERY</li>
                                <li>TEAM</li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li onClick={navTo('.events')}>EVENTS</li>
                            <li>GALLERY</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="jazbaat_banner">
                <div className="main_logo">
                    <img ref={imgRef} src={main_logo} alt='main_logo' className='jazbaatLogoImg'/>
                    <img ref={gifRef} src={jazbaatLoader} alt='jazbaat_gif' className='jazbaatLogoGif'/>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;