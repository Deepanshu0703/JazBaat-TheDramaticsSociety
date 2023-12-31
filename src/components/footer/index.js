import React from 'react'
import { RiFacebookBoxLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiYoutubeLine } from 'react-icons/ri';
import { MdOutlineMailOutline } from 'react-icons/md';

const Footer = () => {
    const facebookLink = 'https://www.facebook.com/Jazbaatiiitdmj'
    const instagramLink = 'https://www.instagram.com/jazbaat_dc/'
    const youtubeLink = 'https://www.youtube.com/user/jazbaatiiitdmj'
    const mailLink = 'mailto:jazbaat@iiitdmj.ac.in'
    const collegeLink = 'https://iiitdmj.ac.in/'
    const developerLink1 = 'https://www.linkedin.com/in/samaksh-agarwal-4b0a57166/'
    const developerLink2='https://deepanshu-portfolio-ku.web.app/'
    
  return (
    <div className='footer_section'>
        <div className='footer-dialogue'>
            <p>एक बार जोर से जज़्बात की ओर से... ।</p>
        </div>
        <div className='footer-contact'>
            <span><a href={facebookLink}><RiFacebookBoxLine /></a></span>
            <span><a href={instagramLink}><RiInstagramLine /></a></span>
            <span><a href={youtubeLink}><RiYoutubeLine /></a></span>
            <span><a href={mailLink }><MdOutlineMailOutline /></a></span>
        </div>
        <div className='footer-links'>
            <p><a href={collegeLink}>© IIITDMJ</a> | Designed & Developed By <a href={developerLink1}>Samaksh Agarwal</a>,<a href={developerLink2}>Deepanshu Kumar</a></p>
        </div>
    </div>
  )
}

export default Footer