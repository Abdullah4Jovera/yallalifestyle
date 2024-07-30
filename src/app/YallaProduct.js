'use client';
import React, { useEffect, useState } from 'react';
import './YallaProductStyle.css';
import producttwo from './Assets/HomePageAssets/producttwo.png';
import productone from './Assets/HomePageAssets/productone.png';
import productthree from './Assets/HomePageAssets/productthree.png';
import productfour from './Assets/HomePageAssets/productfour.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

// Sample JSON data
const jsonData = [
    {
        title: "BARS",
        image: productthree,
        link: "/shops/YallaShopBar"
    },
    {
        title: "drinks",
        image: productfour,
        link: "/shops/YallaShopDrink" // Update link as needed
    },
    {
        title: "crisps",
        image: productone,
        link: "/shops/YallaShopChips" // Update link as needed
    },
    {
        title: "nuts",
        image: producttwo,
        link: "/shops/YallaShopNuts" // Update link as needed
    },
];

function Page() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        setIsLoaded(true);
    }, []);

    return (
        <Container fluid>
            <h1 className='yalla_title' data-aos="fade-up" >
                Yalla <span className='product_title'>Products</span>
            </h1>
            <p className='product_des' data-aos="fade-up" >
                A wide variety of branded snack products that provide healthier alternatives to traditional snacks.
            </p>
            <div className="card_container_product">
                {jsonData.map((item, index) => (
                    <Link href={item.link} key={index} style={{ textDecoration: 'none' }} >
                        <div
                            className={`product_card_yalla ${isLoaded ? 'show' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                        >
                            <Image src={item.image} alt={`product ${index + 1}`} className='yalla_product_image' width={250} height={180} />
                            <h3 className='product_product_name'>{item.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="buttons_mutual_class">
                <Link href={'/shops'}>
                    <button className="nested_btn"><span></span><p data-start="good luck!" data-text="View Product" data-title="Product"></p></button>
                </Link>
            </div>
        </Container>
    );
}

export default Page;
