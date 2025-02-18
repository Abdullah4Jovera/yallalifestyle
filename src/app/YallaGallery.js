'use client';
import React, { useEffect } from 'react';
import './YallaGalleryStyle.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import gallerythree from './Assets/HomePageAssets/gallerythree.png';
import galleryfive from './Assets/HomePageAssets/galleryfive.png';
import gallerysix from './Assets/HomePageAssets/gallerysix.png';
import galleryseven from './Assets/HomePageAssets/galleryseven.png';
import gallerytextlogo from './Assets/HomePageAssets/gallerytextlogo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const cardData = [
    {
        id: 0,
        title: "Animated Card 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: gallerythree
    },

    {
        id: 1,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryfive
    },
    {
        id: 2,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: gallerysix
    },
    {
        id: 3,
        title: "Animated Card 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: galleryseven
    },

];

const Page = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <Container fluid>
                <article class="main-container__marquee" data-aos="fade-up">
                    <div class="main-container__marquee-track">
                        <div class="main-container__marquee-items">

                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                        <div aria-hidden="true" class="main-container__marquee-items">

                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                    </div>
                </article>
                <Row className='gallery_row' >
                    {cardData.map((card) => (
                        <Col key={card.id} md={3} sm={6} xs={12} className="yalla_gallery_column">
                            <div
                                className="yalla_card_gallery"
                                data-aos-offset="200"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                data-aos="fade-up"
                            >
                                <Image src={card.image} alt={card.title} className="card-image" layout="responsive" />
                            </div>
                        </Col>
                    ))}
                </Row>
                <article class="main-container__marquee_below" data-aos="fade-up">
                    <div class="main-container__marquee-track">
                        <div class="main-container__marquee-items">

                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                        <div aria-hidden="true" class="main-container__marquee-items">
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                            <span class="main-container__marquee-item">
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                                EAT GOOD FEEL GOOD <Image src={gallerytextlogo} alt='gallerytextlogo' className='gallerytextlogo' />
                            </span>
                        </div>
                    </div>
                </article>

                <div className="buttons_mutual_class">
                    <Link href={'/machines'}>
                        <button className="nested_btn"><span></span><p data-start="View More" data-text="View More" data-title="Gallery"></p></button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export default Page;

