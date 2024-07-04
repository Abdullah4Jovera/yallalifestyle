import React from 'react'
import { Row, Col, Button, Form, InputGroup, Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import logo from './Assets/HomePageAssets/HomeNavlogo.png'
import twitter from './Assets/HomePageAssets/twitter.png'
import fb from './Assets/HomePageAssets/fb.png'
import insta from './Assets/HomePageAssets/insta.png'
import './HomePage.css';
const YallaFooter = () => {
    return (
        <Container fluid >
            <Row className='footerContainer p-4' >
                <Col xs={12} md={6} lg={4} >
                    <div>
                        <Image src={logo} alt='YallaLifestyle' />
                        <h6 className='footerText' >
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </h6>

                        <div style={{ display: 'flex', gap: '10px' }} className='mt-4' >
                            <Link href={'/'} ><Image src={twitter} alt='twitter' /></Link>
                            <Link href={'/'} ><Image src={fb} alt='fb' /></Link>
                            <Link href={'/'} ><Image src={insta} alt='insta' /></Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={4} >

                    <div className='companyHELP' >
                        <div className='company_div' >
                            <p>COMPANY</p>
                            <p>About </p>
                            <p>Features </p>
                            <p>Works </p>
                            <p>Career</p>
                        </div>

                        <div className='company_div' >
                            <p>HELP</p>
                            <p>Customer Support  </p>
                            <p>Delivery Details </p>
                            <p>Terms & Conditions </p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>

                </Col>
                <Col xs={12} md={6} lg={4} >
                    <h5 className='subscribeNewletter' >SUBSCRIBE TO NEWSLETTER</h5>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter your email"
                            className='textField'
                        />
                        <Button variant="outline-secondary" className='subscribeBtn'>
                            Subscribe
                        </Button>
                    </InputGroup>
                </Col>
                <hr />
                <p className='copyright' >© Copyright 2024, All Rights Reserved by Yalla lifestyle</p>
            </Row>
        </Container>
    )
}

export default YallaFooter


