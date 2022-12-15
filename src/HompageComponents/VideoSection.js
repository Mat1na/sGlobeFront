import React, { useEffect, useState } from 'react'
import Video from "../assets/Video/DJI_0011.mp4"
import photo from "../assets/photo/matthew-smith-Rfflri94rs8-unsplash.webp"
import LazyLoad from 'react-lazyload';

function VideoSection() {
    //this is to check the width of the device. If the device is below 425 width, the video doesn't load
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth)
    useEffect(() => {
        const resizeW = () => changeDeviceSize(window.innerWidth);
            window.addEventListener("resize", resizeW); // Update the width on resize
            return () => window.removeEventListener("resize", resizeW);
      });
    return (
        <>
            <div className='video-container'>
                {deviceSize>425&&<LazyLoad><video src={Video} className="responsive-video" autoPlay loop muted></video></LazyLoad>}
                <img src={photo} alt="alternative for biodiversity video" className="photo-video" />
                <div className='overlay-photo'>
                    <div className='videoheader'><h1 className='montserrat'>Protecting <span className='biodiversity'>biodiversity</span></h1> <h1 className='montserrat'>in a changing world</h1></div>
                </div>
                <div className='overlay'>
                    <div className='videoheader'><h1 className='montserrat'>Protecting <span className='biodiversity'>biodiversity</span></h1> <h1 className='montserrat'>in a changing world</h1></div>
                </div>
            </div>
            <div className='photo-container'>
                <img src={photo} alt="alternative for biodiversity video" className="photo-video" />
                <div className='overlay-photo'>
                    <h1 className='montserrat'>Protecting biodiversity in a changing world</h1>
                </div>
            </div>
        </>

    )
}

export default VideoSection