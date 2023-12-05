import React from 'react'
import Images from '../../assets/images'

const Gallery = () => {
  return (
    <div className='gallery'>
        <div className="gallery_header">
            <h1>GALLERY</h1>
        </div>
        <div className="gallery_media">
            <img src={Images.img1} alt="MonoActPic"/>
            <img src={Images.img2} alt="NukkadPic"/>
            <img src={Images.img3} alt="StageActPic"/>
            <img src={Images.img4} alt="MimesPic"/>
            <img src={Images.img5} alt="MonoActPic"/>
            <img src={Images.img6} alt="NukkadPic"/>
            <img src={Images.img7} alt="StageActPic"/>
            <img src={Images.img8} alt="MimesPic"/>
            <img src={Images.img9} alt="MimesPic"/>
        </div>
        <a href='https://www.instagram.com/jazbaat_dc/' className="gallery_button"><span>Explore More</span><span>Explore More</span></a>
        <div className="quote_section">
          <p>मेरे दोस्त मर्दंगी ताकत की मोहब्बत में नहीं, मोहब्बत की ताकत में है, हाथ उठाने में नहीं हाथ बढ़ाने में है।</p>
        </div>
    </div>
  )
}

export default Gallery