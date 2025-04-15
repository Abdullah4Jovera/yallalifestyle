"use client"
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomePageNav from './HomePageNav';


function HeroSectionCarousal() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <div className="heroSectionSlider"  >
                <ReactPlayer
                    url='https://res.cloudinary.com/dtcmf6iqn/video/upload/v1739955319/uagdrsqqkvrpzbbssube.mp4'
                    controls={false}
                    playing={true}
                    muted={true}
                    loop={true}
                    playsinline={true}
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
}

export default HeroSectionCarousal;

