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
    const developerLink = 'https://www.linkedin.com/in/samaksh-agarwal-4b0a57166/'
    
  return (
    <div className='footer_section'>
        <div className='footer-dialogue'>
            <p>मैं उड़ना चाहता हूं, दौड़ना चाहता हूं, गिरना भी चाहता हूं… बस रुकना नहीं चाहता।</p>
        </div>
        <div className='footer-contact'>
            <span><a href={facebookLink}><RiFacebookBoxLine /></a></span>
            <span><a href={instagramLink}><RiInstagramLine /></a></span>
            <span><a href={youtubeLink}><RiYoutubeLine /></a></span>
            <span><a href={mailLink }><MdOutlineMailOutline /></a></span>
        </div>
        <div className='footer-links'>
            <p><a href={collegeLink}>© IIITDMJ</a> | <a href={developerLink}>Designed & Developed By Samaksh Agarwal</a></p>
        </div>
    </div>
  )
}

export default Footer