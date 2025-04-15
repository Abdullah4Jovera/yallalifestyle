'use client'
import React from "react";
import './yallaStyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import socialbrandone from '../Assets/socialmedia/s1.png'
import eatgoodfeelgoodsocial from '../Assets/socialmedia/s2.png';
import yallasocial from '../Assets/socialmedia/s3.png';
import yallasociallink from '../Assets/socialmedia/s4.png';
import Link from 'next/link';
import YallaSocialMediaCarousal from './YallaSocialMediaCarousal';
import { useMediaQuery } from 'react-responsive';

const YallaSocialMedia = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

    return (
        <div className="social_media_container" >
            <Container>
                <h1 className='social_media_life_style' data-aos="fade-up">SOCIAL MEDIA</h1>
                <p className='social_insta_link' data-aos="fade-up">Follow us on Instagram @yallalifestyle</p>

                {
                    isMobile && isMobile ? (
                        <><YallaSocialMediaCarousal /></>
                    )
                        :
                        <>
                            <div className="desktop_screen">
                                <Row>
                                    <Col>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up" >
                                                <Image src={socialbrandone} alt='socialbrandone' className="social_mdia_images" />
                                            </Link>

                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }}>
                                                <Image src={eatgoodfeelgoodsocial} alt='eatgoodfeelgoodsocial' className=' mt-2 social_mdia_images' data-aos="fade-up" />
                                            </Link>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up">
                                                <Image src={yallasocial} alt='yallasocial' className="social_mdia_images" />
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href={'https://www.instagram.com/yallaLIFESTYLE/'} style={{ textDecoration: 'none' }} data-aos="fade-up">
                                                <Image src={yallasociallink} alt='yallasociallink' className='mt-2 social_mdia_images' />
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </>
                }
            </Container>
        </div>
    );
}

export default YallaSocialMedia;
