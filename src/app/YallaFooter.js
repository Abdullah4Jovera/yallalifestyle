"use client"
import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, InputGroup, Container, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import footerlogo from './Assets/HomePageAssets/footerlogo.png';
import twitter from './Assets/HomePageAssets/twitter.png';
import fb from './Assets/HomePageAssets/fb.png';
import insta from './Assets/HomePageAssets/insta.png';
import footercircle from './Assets/HomePageAssets/footercircle.png';
import productfour from './Assets/HomePageAssets/productfour.png';
import productone from './Assets/HomePageAssets/productone.png';
import producttwo from './Assets/HomePageAssets/producttwo.png';
import productthree from './Assets/HomePageAssets/productthree.png';
import './HomePage.css';
import { IoLogoWhatsapp } from "react-icons/io";

const YallaFooter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [messages, setMessages] = useState([]);


    const images = [productfour, productone, producttwo, productthree];
    const currentYear = new Date().getFullYear();

    const handleNewUserMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    useEffect(() => {
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            setTimeout(() => {
                // Example bot response
                handleNewUserMessage("How can I assist you?");
            }, 1000);
        }
    }, [messages]);


    const handleemailsubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form with email:', email);

        try {
            const response = await fetch('https://formspree.io/f/mdknojjo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            console.log('Response:', response);

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <Container fluid>
            <Row className='footerContainer p-4'>
                <Col xs={12} md={6} lg={4}>
                    <div>
                        <Image src={footerlogo} alt='YallaLifestyle' />
                        <h6 className='footerText mt-2'>
                            Yalla Food and Drinks, supported by the Khalifa Fund, promotes healthier options in the UAE, tackling obesity and diabetes with balanced choices and accessible nutrition.
                        </h6>

                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4'>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={twitter} alt='twitter' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={fb} alt='fb' /></Link>
                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'}><Image src={insta} alt='insta' /></Link>
                            <Link href="https://wa.me/503996120" target="_blank" rel="noopener noreferrer">
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <IoLogoWhatsapp
                                        style={{
                                            fontSize: "18px",
                                            color: "green",
                                            cursor: "pointer",
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className='companyHELP'>
                        <div className='company_div'>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >COMPANY</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >About</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Features</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Works</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Career</p></Link>
                        </div>

                        <div className='company_div'>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >HELP</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Customer Support</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Delivery Details</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Terms & Conditions</p></Link>
                            <Link href={''} style={{ textDecoration: 'none' }} ><p className='footer_text_details' >Privacy Policy</p></Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className='footer_circle_image'>
                        <Image src={footercircle} alt='footercircle' />
                        <Image
                            src={images[currentImageIndex]}
                            alt={`vending${currentImageIndex}`}
                            className='image_nested_footer'
                            key={currentImageIndex}
                        />
                    </div>
                </Col>
                <hr />
                <p className='copyright'>© Copyright {currentYear}, All Rights Reserved by Yalla lifestyle</p>


            </Row>

        </Container>
    );
};

export default YallaFooter;
