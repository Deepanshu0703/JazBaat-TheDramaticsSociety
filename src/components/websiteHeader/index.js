import React,{useState} from 'react';
import logo from '../../assets/images/Jazbaat_Name.png';
import main_logo from '../../assets/images/jazbaatMainLogo.png';
import {IoMenu} from 'react-icons/io5';
import {FaTimes} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
    const navigate = useNavigate();
    const [navBar, setNavBar] = useState(false);
    function navTo(className){
        return function(){
            document.querySelector(className).scrollIntoView({behavior:'smooth'});
            setNavBar(false);
        }
    }
    return(
        <div className='landing_page'>
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
                    <img src={main_logo} alt='main_logo'/>
                </div>
            </div>
        </div>
    )
}