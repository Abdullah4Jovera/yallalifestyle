import React from 'react';
import HomePageNav from '../HomePageNav';
import { Container, Row, Col } from 'react-bootstrap';
import './contactPage.css';
import ContactUsNavbar from './ContactUsNavbar';

const Page = () => {
    return (
        <>
            <ContactUsNavbar />
            <div className="backgroundImage">
                <Container fluid>
                    <Row>
                        <div className='contactContainer'>
                            <h1 className='YallaContact'>YALLA Contact Us</h1>
                            <h3 className='questionremarks'>Any question or remarks? Just write us a message!</h3>
                        </div>

                        <Col xs={12} md={6} className='contactInformation'>One</Col>
                        <Col xs={12} md={6}  style={{backgroundColor:'green'}}>Two</Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Page;
