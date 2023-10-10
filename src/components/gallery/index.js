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
            <img src={Images.img1} alt="MonoActPic"/>
            <img src={Images.img2} alt="NukkadPic"/>
            <img src={Images.img3} alt="StageActPic"/>
            <img src={Images.img4} alt="MimesPic"/>
            <img src={Images.img1} alt="MimesPic"/>
        </div>
        <a href='/' className="gallery_button"><span>Explore More</span><span>Explore More</span></a>
        <div className="quote_section">
          <p>लाइफ में और फिल्म्स में… अंत में सब कुछ ठीक हो जाता है।</p>
        </div>
    </div>
  )
}

export default Gallery