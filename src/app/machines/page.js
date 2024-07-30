"use client"
import React, { useEffect, useRef } from 'react';
import HomePageNav from '../HomePageNav';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import './YallaMachinestyle.css';
import vendehealthiers from '../Assets/MachinePageAssets/vendehealthiers.png';
import lifestylevendee from '../Assets/MachinePageAssets/lifestylevendee.png';
import thecoffee from '../Assets/MachinePageAssets/thecoffee.png';
import gymmachine from '../Assets/MachinePageAssets/gymmachine.png';
import YallaFooter from '../YallaFooter';

const Page = () => {

    const ref = useRef(null);

    useEffect(() => {
        const { current } = ref;
        if (current) {
            current.classList.add('fade-in');
        }
        return () => {
            if (current) {
                current.classList.remove('fade-in');
            }
        };
    }, []);

    return (
        <div className="d-flex flex-column min-vh-100">
            <HomePageNav />
            <Container fluid className='machineContainer flex-grow-1'>
                <h1 className='chooseMachine'>CHOOSE YOUR MACHINE</h1>
                <div className='retailmainContainer'>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaHealtherParameter'}>
                            <Image src={vendehealthiers} alt='Retail_Machine' />
                        </Link>
                    </div>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaRetailerParameter'}>
                            <Image src={lifestylevendee} alt='lifestylevendee' />
                        </Link>
                    </div>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaGym'}>
                            <Image src={thecoffee} alt='thecoffee' />
                        </Link>
                    </div>
                    <div className='retail_div'>
                        <Link href={'/machines/YallaCoffee'}>
                            <Image src={gymmachine} alt='gymmachine' />
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="mt-auto">
                <YallaFooter />
            </div>
        </div>
    );
};

export default Page;
