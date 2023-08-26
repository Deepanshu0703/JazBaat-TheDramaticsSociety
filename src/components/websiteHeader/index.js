import React from 'react';
import logo from '../../assets/images/Jazbaat_Name.png';
import main_logo from '../../assets/images/jazbaatMainLogo.png';

export function LandingPage() {
    return(
        <div className='landing_page'>
            <div className="header">
                <div className="navbar">
                    <div className="jazbaat_logo">
                        <img src={logo} alt="Jazbaat"/>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>EVENTS</li>
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