'use client'
import React, { useState, useEffect } from 'react'
import HomePageNav from './HomePageNav'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import machinelogo from './Assets/HomePageAssets/machinelogo.png'
import YallaMoreAbout from './YallaMoreAbout';
import YallaProduct from './YallaProduct';
import YallaGallery from './YallaGallery';
import YallaServices from './YallaServices';
import HomePageBlogs from './HomePageBlogs';
import YallaFooter from './YallaFooter';
import VendingMachineCarousal from './VendingMachineCarousal';
import './HomePage.css'
const Page = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            <HomePageNav />
            <Container fluid className='HomePageConatiner' >
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className={`vendingText ${animate ? 'fade-in-ease-out' : ''}`}
                        style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}
                    >
                        <h1 className='venderingTech' style={{ color: '#4BC6DA', fontWeight: 600 }}>
                            Vending Technology
                        </h1>
                        <h2 className='newBusinessera' style={{ fontWeight: 500 }}>
                            in new Business Era.
                        </h2>
                        <Link href="/" className='discoverbtn' style={{ fontWeight: 500 }}>
                            Discover
                        </Link>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6} className={`landingPageCarousal ${animate ? 'fade-in-ease-out' : ''}`}>
                        <VendingMachineCarousal />
                    </Col>

                    <YallaMoreAbout />

                    <YallaProduct />

                    <YallaGallery />

                    <YallaServices />

                    <HomePageBlogs />

                    <YallaFooter />
                </Row>
            </Container>
        </>
    )
}

export default Page


