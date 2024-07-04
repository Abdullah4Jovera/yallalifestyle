'use client';

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import dotImage from './Assets/HomePageAssets/dots.png';
import numbercount from './Assets/HomePageAssets/numbercount.png'
import './HomePage.css';

const YallaMoreAbout = () => {
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} lg={6} className='dotImage'>
                    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} >
                        <h1 className='h1Tagyalla'><span className='spanTagyalla'>Yalla Vending Machines</span> In Our Business</h1>
                        <Link href='/' className='moreaboutbtn' >More About</Link>
                    </div>

                    <div className='numbrcountclass' >
                        <Image src={numbercount} alt='Number Count' />
                        <Image src={numbercount} alt='Number Count' />
                        <Image src={numbercount} alt='Number Count' />
                        <Image src={numbercount} alt='Number Count' />
                    </div>
                </Col>

                <Col xs={12} lg={6} className='twoCol'>
                    <p className='loremtext' >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>

                    <div style={{ width: '100%', maxWidth: '500px' }} >
                        <p className='machineInsllated' style={{ fontWeight: '700' }} >Machines Installed</p>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default YallaMoreAbout;
