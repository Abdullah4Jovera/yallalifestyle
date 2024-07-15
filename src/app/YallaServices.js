'use client'
import React from "react";
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './HomePage.css';
import serviceCards from './Assets/HomePageAssets/serviceCards.png';
import HomePageTestmonial from "./HomePageTestmonial";
import { useMediaQuery } from 'react-responsive';
import ServiceCarousal from "./YallaServiceCarousal";
import servicsone from './Assets/HomePageAssets/servicsone.png'
import servicestwo from './Assets/HomePageAssets/servicestwo.png'
import servicesfour from './Assets/HomePageAssets/servicesfour.png'
import servicesthree from './Assets/HomePageAssets/servicesthree.png'
import servicesfive from './Assets/HomePageAssets/servicesfive.png'
import adnoc from './Assets/HomePageAssets/adnoc.png'

const YallaServices = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <Row style={{ marginTop: '7%' }}>
            <Col>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h4 className='productTag'>SERVICES</h4>
                    <h2 className='yallaproduct'><span className='yallatag'>Yalla</span> SERVICES</h2>
                    <p style={{ fontWeight: '400' }} className='producttext'>
                        Services we provide you for the vision of a healthier UAE
                    </p>
                </div>

                {isMobile ? (
                    <ServiceCarousal />
                ) : (
                    <div className='mt-4 allservicecards'>
                        <Link href={''} ><Image src={servicesfive} alt="servicesfive" className="service-image service-image-five" /></Link>
                        <Link href={''} > <Image src={servicesthree} alt="servicesthree" className="service-image service-image-three" /></Link>
                        <Link href={''} ><Image src={servicsone} alt="servicesone" className="service-image service-image-one" /></Link>
                        <Link href={''} > <Image src={servicestwo} alt="servicestwo" className="service-image service-image-two" /></Link>
                        <Link href={''} >   <Image src={servicesfour} alt="servicesfour" className="service-image service-image-four" /></Link>
                    </div>

                )}

                <div className='btnContainerprpduct'>
                    <Link href={'/machines'} className='moreservices'>More Services</Link>
                </div>

                <div className="adnoc_bg_image" >
                    <Image src={adnoc} alt="adnoc" className="img-fluid" />
                </div>


                {/* Testimonials */}
                <HomePageTestmonial />
            </Col>
        </Row>
    );
};

export default YallaServices;
