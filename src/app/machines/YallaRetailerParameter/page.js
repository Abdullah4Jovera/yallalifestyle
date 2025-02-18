"use client"
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import '../YallaHealther/Yallahealther.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import YallaFooter from '@/app/YallaFooter';
import Link from 'next/link';
import yallalifestyleparamter from '../../Assets/MachinePageAssets/yallalifestyleparamter.png';
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import HomePageNav from '../../HomePageNav';

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
                <Container>
                    <Link href='/machines'>
                        <MdOutlineKeyboardBackspace 
                            data-aos="fade-up" 
                            className='mt-4' 
                            style={{ color: 'black', fontSize:'40px' }} 
                        />
                    </Link>
                    <h1 className='gohealthier_parameter' data-aos="fade-up">
                        LIFESTYLE
                    </h1>
                    <div 
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
                        data-aos="fade-up"
                    >
                        <Image
                            src={yallalifestyleparamter}
                            alt='yallalifestyleparamter'
                            style={{ maxWidth: '100%', height: 'auto' }}
                            className='hover-animate'
                        />
                    </div>

                    <div className='h1_conatiner_healthier_tag'>
                        <h1 className='yallahealtier_h1_tag' data-aos="fade-up">
                            <span className='go_healthier_H_WORD'>Y</span>alla&apos;s &quot;LIFESTYLE&quot; Vending machines: offering curated, wholesome snacks for health-conscious consumers on the go. We prioritize taste and nutrition, ensuring each product meets our high standards. Empower your wellness journey with convenient, quality choices that support a healthier lifestyle.
                        </h1>
                    </div>

                      <div className='all_btn_product_machine'>
                        <Link href={'/machines/YallaRetailer'} data-aos="fade-up" data-aos-delay="100">
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
