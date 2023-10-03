import React, {useState, useEffect, useRef} from 'react'
import Images from '../../assets/images'
import { MdOutlineMailOutline } from 'react-icons/md';
import { LiaLinkedin } from 'react-icons/lia';

const Card = ({dataImage, header, personName, email, linkedin}) => {
    const [mouseX, setMouseX] = useState(0); 
    const [mouseY, setMouseY] = useState(0);
    const [cardDimensions, setCardDimensions] = useState({width: 0, height: 0});
    const cardRef = useRef();
  
    useEffect(() => {
      setCardDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }, []);
  
    const handleMouseMove = (e) => {
      setMouseX(e.clientX - cardRef.current.offsetLeft - cardDimensions.width / 2);
      setMouseY(e.clientY - cardRef.current.offsetTop - cardDimensions.height / 2);
    }
  
    const handleMouseLeave = () => {
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 400);
    }

    const mailTo = (email) => {
        window.location.href = "mailto:" + email;
    }
    
    const cardStyle = {
        transform: `rotateY(${(mouseX / cardDimensions.width * 10)%10}deg) rotateX(${(mouseY / cardDimensions.height * -10)%10}deg)`
      };
    
      const cardBgTransform = {
        transform: `translateX(${(mouseX / cardDimensions.width * -10)%10}px) translateY(${(mouseY / cardDimensions.height * -10)%10}px)`
      };
    
      const cardBgImage = {
        backgroundImage: `url(${dataImage})`
      };
  
      return (
          <div className="team-card-wrap" 
            onMouseMove={handleMouseMove} 
            onMouseEnter={() => clearTimeout(handleMouseLeave)} 
            onMouseLeave={handleMouseLeave} 
            ref={cardRef}>

  <div className="team-card" style={cardStyle}>
              <div className="team-card-bg" style={{...cardBgTransform, ...cardBgImage}}></div>
              <div className="team-card-info">
                <p>{header}</p>
                <p>{personName}</p>
                <div className="team-card-contact">
                  <span><MdOutlineMailOutline onClick={() => mailTo(`${email}`)} /></span>
                  <span><a href={linkedin}><LiaLinkedin /></a></span>
                  </div>
              </div>
            </div>
          </div>
        )
  }

const Team = () => {
  return (
    <div className="team_section">
        <h1>Team</h1>
        <div className='team_cards'>
            <Card dataImage={Images.MonoActPic} header="Faculty Incharge" personName={"XYZ"} email={"#"} linkedin={"#"}/>
            <Card dataImage={Images.NukkadPic} header="Faculty Incharge" personName={"XYZ"} email={"#"} linkedin={"#"}/>
            <Card dataImage={Images.StageActPic} header="Coordinator" personName={"XYZ"} email={"#"} linkedin={"#"}/>
            <Card dataImage={Images.MimesPic} header="Co-Coordinator" personName={"XYZ"} email={"#"} linkedin={"#"}/>
        </div>
    </div>
  )
}

export default Team