"use client"
import React, { useEffect, useRef } from 'react';
import HomePageNav from '../HomePageNav';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './YallaMachinestyle.css';
import galleryfive from '../Assets/HomePageAssets/galleryfive.png';
import gallerysix from '../Assets/HomePageAssets/gallerysix.png';
import galleryseven from '../Assets/HomePageAssets/galleryseven.png';
import gallerythree from '../Assets/HomePageAssets/gallerythree.png';
import YallaFooter from '../YallaFooter';

const Page = () => {
    const ref = useRef(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add('fade-in');
        }
        return () => {
            if (ref.current) {
                ref.current.classList.remove('fade-in');
            }
        };
    }, []);

    const machines = [
        { href: '/machines/YallaHealtherParameter', src: gallerysix, alt: 'lifestylevendee' },
        { href: '/machines/YallaRetailerParameter', src: galleryfive, alt: 'Retail_Machine' },
        { href: '/machines/YallaGym', src: galleryseven, alt: 'thecoffee' },
        { href: '/machines/YallaCoffee', src: gallerythree, alt: 'gymmachine' }
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <HomePageNav />
            <Container fluid className='machineContainer flex-grow-1'>
                <h1 className='chooseMachine text-center'>CHOOSE YOUR MACHINE</h1>
                <Row className='g-4 justify-content-center'>
                    {machines.map((machine, index) => (
                        <Col key={index} xs={12} sm={6} md={4} lg={3} className='d-flex justify-content-center'>
                            <Card className='text-center yalla_machine_cards mt-3'>
                                <Link href={machine.href}>
                                    <Image src={machine.src} alt={machine.alt} className='machine_images' />
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <div className="mt-auto">
                <YallaFooter />
            </div>
        </div>
    );
};

export default Page;