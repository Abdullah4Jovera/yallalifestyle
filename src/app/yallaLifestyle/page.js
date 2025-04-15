"use client"
import React, { useState, useEffect } from 'react';
import HomePageNav from '../HomePageNav'
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import inspiringwelbeing from '../Assets/LifestyleAssets/inspiringwelbeing.png'
import './yallaStyle.css'
import YallaFooter from '../YallaFooter';
import yallalifestyle_main_image from '../Assets/LifestyleAssets/yallalifestyle_main_image.png'
import lifestylechips from '../Assets/LifestyleAssets/lifestylechips.png'
import lifestyle_chocloate from '../Assets/LifestyleAssets/lifestyle_chocloate.png'
import Slider from "react-slick";
import yallalifelogo from '../Assets/MachinePageAssets/yallalifelogo.png'
import yalladistribution from '../Assets/MachinePageAssets/yalladistribution.png'
import yallavending from '../Assets/MachinePageAssets/yallavending.png'
import YallaBrands from './YallaBrands';
import YallaSocialMedia from './YallaSocialMedia';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nutsandchoco from '../Assets/LifestyleAssets/nutsandchoco.png'


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
        perspective: '1000px'

    },
    imageWrapper: {
        flex: '1 1 calc(33.333% - 32px)',
        maxWidth: '100%',
        position: 'relative',
        transition: 'transform 0.3s ease'
    },

};

const Page = () => {

    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: current => setActiveSlide2(current)
    };

    return (
        <>
            <HomePageNav />
            <div className='yallaContainer'>
                <div className='yallalifestyle_main_image_container' >
                    <Image src={yallalifestyle_main_image} alt='yallalifestyle_main_image' className='yallalifestyle_main_image' />
                </div>

                <div className='yalla_life_style_text_conatiner'>
                    <div className='yalla_life_style_text_div'>
                        <h1 className='yalla_life_style_tag' data-aos="fade-up" data-aos-duration="1000">
                            Yalla Lifestyle is a brand that is focused on inspiring better lifestyle choices by connecting people to real food and exciting,
                            original brands that improve their overall wellbeing and enjoyment.
                        </h1>
                    </div>
                </div>

                <div className='animated-image mt-2' data-aos="zoom-in" data-aos-delay="100">
                    <Image src={nutsandchoco} alt='lifestylechips' layout='responsive' objectFit='cover' />
                </div>

                <Container>
                    <div className='yalla_life_style_text_div'>
                        <h1 className='yalla_look_text' data-aos="fade-up" >We look to create easy access to products that taste good, look good and make you feel good.</h1>

                        <h3 className='yalla_text_operation' data-aos="fade-up" >At Yalla Lifestyle we have three main areas of operation</h3>
                    </div>

                    <div className="slider-container yalla_life_style_carousal" >

                        <Slider {...settings}>

                            <div>
                                <div className="TestamonialMianContainer_lifestyle" data-aos="fade-up">
                                    <Image src={yallalifelogo} alt="yallalifelogo" />
                                    <div>

                                        <p className='lifestyle_p_tag' >
                                            Lifestyle is all encompassing. What we put in our bodies is extremely important, but Yalla also believes that life is just better when you have immediate access to small luxuries that make things more efficient, workable or simply just make you feel good.
                                        </p>

                                        <p className='lifestyle_p_tag' >
                                            Whether you need high quality accessories, exciting gifts, new devices or the latest wearables – Yalla has you covered.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="TestamonialMianContainer_lifestyle" >
                                    <Image src={yalladistribution} alt="yalladistribution" />
                                    <div>
                                        <p className='lifestyle_p_tag' >
                                            Yalla distributes a number of food, drink and lifestyle brands in the region We seek to provide additional stocking options for the brands we carry and work with a range of retailers and outlets.
                                        </p>

                                        <p className='lifestyle_p_tag'>
                                            For consumers, we want to provide the ultimate in convenience and work hard to get our exciting products in a wide range of locations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="TestamonialMianContainer_lifestyle">
                                    <Image src={yallavending} alt="yallalifelogo" />
                                    <div>
                                        <p className='lifestyle_p_tag' >
                                            Yalla use vending machines as a way to enable easy access to healthy foods and high-quality lifestyle products, 24hrs a day. We do it differently. No more boring machines, no more low-tech solutions. Yalla offers a bright, colourful, dynamic dispensers in accessible venues.
                                        </p>

                                        <p className='lifestyle_p_tag'>
                                            The company ethos is one of making traditional vending obsolete and healthy choices easy for all.  Yalla has machines across the UAE in convenient locations, with a specialised focus on sports, fitness and educational establishments
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>

                    <YallaBrands />

                </Container>

                <YallaSocialMedia />

                <YallaFooter />
            </div>
        </>
    )
}

export default Page


