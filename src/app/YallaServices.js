'use client';
import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './YallaServices.css';
import serviceCards from './Assets/HomePageAssets/serviceCards.png';
import HomePageTestmonial from "./HomePageTestmonial";
import { useMediaQuery } from 'react-responsive';
import ServiceCarousal from "./YallaServiceCarousal";
import adnoc from './Assets/HomePageAssets/adnoc.png'
import yasmarina from './Assets/HomePageAssets/yasmarina.png'
import AdnocYasCarousal from "./AdnocYasCarousal";
import serviceone from './Assets/HomePageAssets/serviceone.png'
import servicetwo from './Assets/HomePageAssets/servicetwo.png'
import servicethree from './Assets/HomePageAssets/servicethree.png'
import servicefour from './Assets/HomePageAssets/servicefour.png'
import servicefive from './Assets/HomePageAssets/servicefive.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const YallaServices = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <h1 className='yalla_title mb-4' data-aos="fade-up" >
                Yalla <span className='product_title'>Services</span>
            </h1>
            <div className="services_bg" data-aos="fade-up">
                <Container fluid >
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Col xs={12} md={6} lg={2} className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Image src={serviceone} alt="service_one" className="services_images_class" /></Col>
                        <Col xs={12} md={6} lg={2} className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Image src={servicetwo} alt="service_two" className="services_images_class" /></Col>
                        <Col xs={12} md={6} lg={2} className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Image src={servicethree} alt="servicethree" className="services_images_class" /></Col>
                        <Col xs={12} md={6} lg={2} className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Image src={servicefour} alt="service_four" className="services_images_class" /></Col>
                        <Col xs={12} md={6} lg={2} className="mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><Image src={servicefive} alt="service_one" className="services_images_class" /></Col>
                    </Row>
                </Container>
            </div>
            <AdnocYasCarousal />
            <HomePageTestmonial />
        </>
    );
};

export default YallaServices;




