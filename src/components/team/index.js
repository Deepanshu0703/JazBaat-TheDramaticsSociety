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
            <Card dataImage={Images.fic1} header="Faculty Incharge" personName={"Kusum K. Bharti"} email={"kusum@iiitdmj.ac.in"} linkedin={"https://www.linkedin.com/in/kusum-kumari-bharti-10598627"}/>
            <Card dataImage={Images.fic2} header="Faculty Incharge" personName={"Koushik Dutta"} email={"koushikdutta@iiitdmj.ac.in"} linkedin={"http://faculty.iiitdmj.ac.in/faculty/koushikdutta"}/>
            <Card dataImage={Images.cordinator} header="Coordinator" personName={"Devansh Khandelwal"} email={"devanshkhandelwal930@gmail.com"} linkedin={"https://www.linkedin.com/in/devansh-khandelwal-51b009201?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}/>
            <Card dataImage={Images.co_cordinator} header="Co-Coordinator" personName={"Gautam Singhal"} email={"singhalgautam922@gmail.com"} linkedin={"https://www.linkedin.com/in/gautam-singhal/"}/>
            <Card dataImage={Images.co_cordinator2} header="Co-Coordinator" personName={"Roshni Singh"} email={"singhroshni2004@gmail.com"} linkedin={"https://www.linkedin.com/in/roshni-singh-7645sd/"}/>
        </div>
    </div>
  )
}

export default Team