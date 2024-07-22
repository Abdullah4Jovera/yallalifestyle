import React from 'react'
import './YallaConsumer.css'
import { Container, Row, Col } from 'react-bootstrap'
import cosumerone from './Assets/HomePageAssets/cosumerone.png'
import cosumertwo from './Assets/HomePageAssets/cosumertwo.png'
import cosumerthree from './Assets/HomePageAssets/cosumerthree.png'
import cosumerfour from './Assets/HomePageAssets/cosumerfour.png'
import cosumerfive from './Assets/HomePageAssets/cosumerfive.png'
import cosumersix from './Assets/HomePageAssets/cosumersix.png'
import cosumerseven from './Assets/HomePageAssets/cosumerseven.png'
import cosumereight from './Assets/HomePageAssets/cosumereight.png'
import Image from 'next/image'
const Page = () => {
    return (
        <div>
            <h1 className='yalla_titile' data-aos="fade-up" data-aos-delay="100"  >Yalla <span className='product_title'>Consumers</span></h1>
            <Container className='Consumer_container' >
                <Row data-aos="fade-up"   >
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumerone} alt='cosumerone' /></Col>
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumertwo} alt='cosumertwo' /></Col>
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumerthree} alt='cosumerthree' /></Col>
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumerfour} alt='cosumerfour' /></Col>
                </Row>
                <Row data-aos="fade-up"   >
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumerfive} alt='cosumerfive' /></Col>
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumersix} alt='cosumersix' /></Col>
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumerseven} alt='cosumerseven' /></Col>
                    <Col xs={12} sm={6} md={6} className="image-col yallaConsumerRow"><Image src={cosumereight} alt='cosumereight' /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Page