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

const YallaServices = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <Row className='mt-5'>
            <Col>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h4 className='productTag'>SERVICES</h4>
                    <h2 className='yallaproduct'><span className='yallatag'>Yalla</span> SERVICES</h2>
                    <p style={{ fontWeight: '400' }} className='producttext'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
                </div>

                {isMobile ? (
                    <ServiceCarousal/>
                ) : (
                    <div className='mt-3 allservicecards'>
                        <Image src={serviceCards} alt='ServiceCards' className='serviceCards' />
                    </div>
                )}

                <div className='btnContainerprpduct'>
                    <Link href={'/machines'} className='moreservices'>More Services</Link>
                </div>

                <div className='profitvenue'>
                    <h1 className='profittext mt-5'>Profit Your Venue With No Cost Up-Front.</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '950px' }}>
                        <Link href={'/'} className='viewAllservicegetstarted'>Get Started</Link>
                    </div>
                </div>

                {/* Testimonials */}
                <HomePageTestmonial />
            </Col>
        </Row>
    );
};

export default YallaServices;
