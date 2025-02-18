"use client"
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import YallaMachineNavbar from '../YallaMachineNavbar';
import vendehealthierone from '../../Assets/MachinePageAssets/vendehealthierone.png';
import '../YallaHealther/Yallahealther.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YallaFooter from '@/app/YallaFooter';
import Link from 'next/link';
import backlogo from '../../Assets/MachinePageAssets/backlogo.png';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import HomePageNav from '../../HomePageNav'
const Page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <HomePageNav />
            <div className='machineConatiner_parameter'>
                <Container >
                    <Link href='/machines'><MdOutlineKeyboardBackspace data-aos="fade-up" className='mt-4' style={{ color: 'black', fontSize: '40px' }} /></Link>
                    <h1 className='gohealthier_parameter' data-aos="fade-up" >GO HEALTHIER</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-aos="fade-up" >
                        <Image
                            src={vendehealthierone}
                            alt='vendehealthierone'
                            style={{ maxWidth: '100%', height: 'auto' }}
                            className='hover-animate'
                        />
                    </div>

                    <div className='h1_conatiner_healthier_tag' >
                        <h1 className='yallahealtier_h1_tag' data-aos="fade-up"  >
                            <span className='go_healthier_H_WORD' >H</span>ealth and nutrition are of ever more interest to us all with each passing year, and as such the need to bring the best quality snacks and beverages into the market was obvious.
                        </h1>
                        <h1 className='yallahealtier_h1_tag' data-aos="fade-up" >
                            There is no doubt that the world values convenience, and Yalla “Go Healthier” Vending machines conveniently provide the ultimate mix of tastier and healthier snack fare.
                        </h1>
                        <h1 className='yallahealtier_h1_tag' data-aos="fade-up" >
                            By simply making healthier products and information more accessible, we hope to contribute with helping people lead more health conscious and active lifestyles.
                        </h1>
                    </div>

                    <div className='all_btn_product_machine'>
                        <Link href={'/machines/YallaHealther'} data-aos="fade-up" data-aos-delay="100">
                            <button className='view_more_product' >
                                <span> View Product Parameter </span>
                            </button>
                        </Link>
                    </div>
                </Container>
                <YallaFooter />
            </div>
        </>
    );
}

export default Page;
