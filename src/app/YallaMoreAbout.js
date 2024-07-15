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
            <Row style={{ marginTop: '7%' }} >
                <Col xs={12} lg={6} className='dotImage' >
                    <div style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }} >
                        <h1 className='h1Tagyalla'><span className='spanTagyalla'>Yalla Vending Machines</span> In Our Business</h1>
                        <Link href='/' className='moreaboutbtn' >More About</Link>
                    </div>
                </Col>

                <Col xs={12} lg={6} >
                    <div className='yallaAbouttxt'>
                        <p className='loremtext' >
                            Yalla food and drinks is an Emirati owned company supported by Khalifa fund. we are a company driven by a passionate belief that customer seeking
                            convenience foods should be allowed healthier and balanced choices. This has been our goal from inception. Our team members share the vision of a
                            healthier UAE and are determined to help combat prevailing health issues such as obesity and diabetes. We aim to become a powerful voice for
                            changing the way people think about vending by making healthier products and related information more accessible to people.
                        </p>
                    </div>
                </Col>


                <Row className='machineInstalledCount'>
                    <Col xs={12} lg={6}>
                        <div className='numbrcountclass' >
                            <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                            <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                            <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                            <Image src={numbercount} alt='Number Count' style={{ width: '100%', maxWidth: '120px' }} />
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className='machineInstalledCol' >
                        <div className='machineInstalledTxt' >
                            <p className='machineInsllated' style={{ fontWeight: '700' }} >Machines Installed</p>
                        </div>
                    </Col>
                </Row>
            </Row>
        </>
    );
}

export default YallaMoreAbout;
