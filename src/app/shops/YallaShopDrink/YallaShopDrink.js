'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import drinkone from '../../Assets/HomePageAssets/shopsAssets/drinkone.png';
import drinktwo from '../../Assets/HomePageAssets/shopsAssets/drinktwo.png';
import drinkthree from '../../Assets/HomePageAssets/shopsAssets/drinkthree.png';
import drinkfour from '../../Assets/HomePageAssets/shopsAssets/drinkfour.png'
import drinkfive from '../../Assets/HomePageAssets/shopsAssets/drinkfive.png'
import drinksix from '../../Assets/HomePageAssets/shopsAssets/drinksix.png'
import drinkseven from '../../Assets/HomePageAssets/shopsAssets/drinkseven.png'
import drinkdetailone from '../../Assets/HomePageAssets/shopsAssets/drinkdetailone.png'
import drinkdetailtwo from '../../Assets/HomePageAssets/shopsAssets/drinkdetailtwo.png'
import drinkdetailthree from '../../Assets/HomePageAssets/shopsAssets/drinkdetailthree.png'
import drinkdetailfour from '../../Assets/HomePageAssets/shopsAssets/drinkdetailfour.png'
import drinkdetailfive from '../../Assets/HomePageAssets/shopsAssets/drinkdetailfive.png'
import drinkdetailsix from '../../Assets/HomePageAssets/shopsAssets/drinkdetailsix.png'
import drinksevens from '../../Assets/HomePageAssets/shopsAssets/drinksevens.png'
import drinksevendetails from '../../Assets/HomePageAssets/shopsAssets/drinksevendetails.png'
import waterbottledetails from '../../Assets/HomePageAssets/shopsAssets/waterbottledetails.png'
import { Button, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import Image from 'next/image';
import '../shopStyle.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import Popup from 'reactjs-popup';
import '../shopButton.css';
import 'reactjs-popup/dist/index.css';

const YallaShopDrink = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleClose = () => setShow(false);



    function handleShow(product) {
        setFullscreen(product);
        setSelectedProduct(product);
        setShow(true);
    }
    const cards = [
        {
            title: 'Acai-berry & Green tea',
            description: 'A high energy Drink',
            image: drinkone,
            detaildes:
                "Experience a cleansing energy boost with our superfood blend of green tea, blueberries, and Amazonian Acai. Packed with antioxidants and free from artificial additives, it's a natural way to refresh and energize.",
            detailsImage: drinkdetailthree,
        },
        {
            title: 'Lemon & Green tea',
            description: 'A high energy Drink',
            image: drinktwo,
            detaildes:
                'Refresh your mind with our lemon and apple green tea drink, a favorite for its natural caffeine and antioxidant benefits. Enjoy the zesty twist of lemon in our sugar-free, artificial ingredient-free chilled version',
            detailsImage: drinkdetailtwo,
        },
        {
            title: 'Red Grape  & Rooibos Tea',
            description: 'A high energy Drink',
            image: drinkthree,
            detaildes:
                "Indulge in our grape and apple drink with redbush tea—a South African wonder-drink known for promoting glowing skin, strong teeth and bones, smooth digestion, and a good night's sleep. Sweetened naturally with grape and apple, it's pure and free of artificial additives.",
            detailsImage: drinkdetailone,
        },
        {
            title: "Nai's Moroccan Mint Tea",
            description: 'A high energy Drink',
            image: drinkfour,
            detaildes:
                "Premium Green tea authentically brewed and naturally flavoured with Mint and a touch of Lemon. Combining centuries of culinary traditions in one pot. Try our Moroccan Mint Tea à la Nai… Enjoy an Arabian Moment",
            detailsImage: drinkdetailfour,
        },
        {
            title: "Nai's Hibiscus Pomegranate Rose Tea ",
            description: 'A high energy Drink',
            image: drinkfive,
            detaildes:
                "Experience our authentic Egyptian Hibiscus Flower Tea, naturally flavored with Pomegranate and a hint of Rose Water. Caffeine-free and hydrating, it's the perfect thirst quencher for an Arabian moment.",
            detailsImage: drinkdetailfive,
        },
        {
            title: "Nai’s Peach Mango Jasmine with White Peony Tea",
            description: 'A high energy Drink',
            image: drinksix,
            detaildes:
                "White Peony tea authentically brewed and naturally flavoured with Peach, Mango and a touch of Jasmine. Our lightest tea, mixing two of the most popular flavours, peach and mango, into one delicious drink… Enjoy an Arabian Moment",
            detailsImage: drinkdetailsix,
        },
        {
            title: 'vitamin WELL ENHANCE',
            description: 'A high energy Drink',
            image: drinksevens,
            detaildes:
                "Enhance includes vitamin C, niacin, and pantothenic acid to reduce fatigue, along with vitamin B6 for energy metabolism and immune support. Vitamin C also boosts iron absorption.",
            detailsImage: drinksevendetails,
        },
        {
            title: 'Acai-berry & Green tea',
            description: 'A high energy Drink',
            image: drinkone,
            detaildes:
                "Experience a cleansing energy boost with our superfood blend of green tea, blueberries, and Amazonian Acai. Packed with antioxidants and free from artificial additives, it's a natural way to refresh and energize.",
            detailsImage: drinkdetailthree,
        },
        {
            title: 'vitamin WELL AWAKE',
            description: 'A high energy Drink',
            image: drinkseven,
            detaildes:
                "Awake features caffeine for alertness, plus vitamin D, B12, and folic acid to support immune function. Vitamin Well is a low-calorie drink enriched with essential vitamins and minerals, complementing a balanced diet and healthy lifestyle.",
            detailsImage: waterbottledetails,
        },

    ];

    const relatedProducts = useMemo(() => {
        if (!selectedProduct) return [];
        return cards
            .filter(
                (product) => product.category === selectedProduct.category
            )
            .slice(0, 3);
    }, [selectedProduct]);
    return (
        <div className="shop-container">
            {cards.map((card, index) => (
                <Card key={index} className='mt-3 All_shop_card_class'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    onClick={() => handleShow(card)}
                >
                    <div className='card-content'>
                        <div className='image_bars' >
                            <Image src={card.image} alt={card.title} />
                        </div>
                        <Card.Body className='text-center card-body'>
                            <h1 className='bars_title'>{card.title}</h1>
                            <p className='bars_des'>{card.description}</p>
                            <div className='overlay'></div>
                            <div className="view-details-btn-container">
                                {/* <Button variant="primary" onClick={() => handleShow(card)} className="view-details-btn">View Details</Button> */}
                                <button className="btn-12" onClick={() => handleShow(card)} ><span>View Details</span></button>
                                {/* <Button onClick={() => handleShow(card)} >View Details</Button> */}
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            ))}

            {selectedProduct && (
                <Popup open={show} closeOnDocumentClick onClose={handleClose} >
                    <div className="modal-content">

                        <div className='close_btn' >
                            <button onClick={handleClose} className="noselect">
                                <span className="text">Close</span>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="text-center">
                            <div className='detailsImage_selected_container' >
                                <Image src={selectedProduct.detailsImage} alt={selectedProduct.title} className='detailsImage_selected' />
                            </div>

                            <h2 className='selected_title' >{selectedProduct.title}</h2>

                            <div className='selected_des_container' >
                                <p className='selected_des' >{selectedProduct.detaildes}</p>
                            </div>
                        </div>
                    </div>
                </Popup>
            )}
        </div>
    );
}

export default YallaShopDrink;
