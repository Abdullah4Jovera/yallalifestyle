'use client'
import React, { useEffect, useState } from 'react';
import './AboutsectionStyle.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import aboutusPage from './Assets/HomePageAssets/aboutusPage.png';
import aboutusPageone from './Assets/HomePageAssets/aboutusPageone.png';
import yallaaboutlogo from './Assets/HomePageAssets/yallaaboutlogo.png';

const Page = () => {
    const images = [aboutusPage, aboutusPageone];
    const [currentImage, setCurrentImage] = useState(aboutusPage);

    useEffect(() => {
        AOS.init({ duration: 2000 });

        const interval = setInterval(() => {
            setCurrentImage((prevImage) => {
                // Filter out the current image to avoid repetition
                const availableImages = images.filter(img => img !== prevImage);
                const randomIndex = Math.floor(Math.random() * availableImages.length);
                return availableImages[randomIndex];
            });
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="flex-container">
                <div className="image-container" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
                    <Image
                        src={currentImage}
                        alt="About Us"
                        className="image_yalla_about"
                        layout="responsive"
                    />
                </div>
                <div className="text-container" data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <Image src={yallaaboutlogo} alt='yallaaboutlogo' className='yallaaboutlogo' />
                    <h1 className='about_us_heading mt-3'>About Us</h1>
                    <p className='yallaaBOUTText'>
                        Yalla food and drinks is an Emirati owned company supported by khalifa fund. We are a company driven by a passionate belief that customers
                        seeking convenience foods should be allowed healthier and balanced choices. This has been our goal from inception. Our team members share
                    </p>
                    <p className='yallaaBOUTText'>
                        The vision of a healthier UAE and are determined to help combat prevailing health issues such as obesity and diabetes. We aim to become a
                        powerful voice for changing the way people think about vending by making healthier products and related information more accessible to people.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;
