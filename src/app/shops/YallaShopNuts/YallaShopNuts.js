'use client';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import AOS from 'aos';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import '../shopStyle.css';
import '../shopButton.css';
import nutone from '../../Assets/HomePageAssets/shopsAssets/nutone.png';
import nuttwo from '../../Assets/HomePageAssets/shopsAssets/nuttwo.png';
import nutthree from '../../Assets/HomePageAssets/shopsAssets/nutthree.png';
import nutfour from '../../Assets/HomePageAssets/shopsAssets/nutfour.png';
import nutfive from '../../Assets/HomePageAssets/shopsAssets/nutfive.png';
import nutsix from '../../Assets/HomePageAssets/shopsAssets/nutsix.png';
import nutsdetailsone from '../../Assets/HomePageAssets/shopsAssets/nutsdetailsone.png';
import nutsdetailstfive from '../../Assets/HomePageAssets/shopsAssets/nutsdetailstfive.png';
import nutsdetailstfour from '../../Assets/HomePageAssets/shopsAssets/nutsdetailstfour.png';
import nutsdetails from '../../Assets/HomePageAssets/shopsAssets/nutsdetails.png';
import nutsdetailsthree from '../../Assets/HomePageAssets/shopsAssets/nutsdetailsthree.png';
import nutsdetailstwo from '../../Assets/HomePageAssets/shopsAssets/nutsdetailstwo.png';

const YallaShopNuts = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedProduct(null);
    };

    const cards = [
        {
            title: 'MANI YUMMY BERRY N’ NUTS',
            description: 'A high energy snack bar',
            image: nutone,
            detaildes:
                'Mix of dry roasted almonds and pistachio kernels with raisins, cranberries and roasted pumpkin seeds.',
            detailsImage: nutsdetailsone,
        },
        {
            title: 'MANI YUMMY SEA SALT',
            description: 'A high energy snack bar',
            image: nuttwo,
            detaildes:
                'Carefully selected large, crunchy cashews, cleaned then dry roasted with fresh ground black pepper and sea salt.',
            detailsImage: nutsdetailstfive,
        },
        {
            title: 'MANI YUMMY SWEET COCKTAIL',
            description: 'A high energy snack bar',
            image: nutthree,
            detaildes:
                'A nutritious blend of pistachios, almonds, cashew nuts, sultana raisins, pineapple and papaya cubes.',
            detailsImage: nutsdetailstfour,
        },
        {
            title: 'MANI YUMMY BARBEQUE',
            description: 'A high energy snack bar',
            image: nutfour,
            detaildes:
                'Heart healthy almonds, dry-roasted with a delicious barbecue flavor.',
            detailsImage: nutsdetails,
        },
        {
            title: 'SAHALE POMEGRANATE VANILLA',
            description: 'A high energy snack bar',
            image: nutfive,
            detaildes:
                'Unique combinations of premium nuts, dried fruits, and exotic spices, each reflecting a beautiful location, culture or culinary tradition. Gluten Free MSG Free No Artifical Colours No Artificial Flavours No Cholesterol No Preservatives No Trans Fat Non-GMO',
            detailsImage: nutsdetailsthree,
        },
        {
            title: 'SAHALE HONEY ALMONDS',
            description: 'A high energy snack bar',
            image: nutsix,
            detaildes:
                'Unique combinations of premium nuts, dried fruits, and exotic spices, each reflecting a beautiful location, culture or culinary tradition. Gluten Free MSG Free No Artifical Colours No Artificial Flavours No Cholesterol No Preservatives No Trans Fat Non-GMO',
            detailsImage: nutsdetailstwo,
        },
    ];

    return (
        <div className="shop-container">
            {cards.map((card, index) => (
                <Card key={index} className="mt-3 All_shop_card_class" data-aos="fade-up" data-aos-duration="1000" onClick={() => handleShow(card)}>
                    <div className="card-content">
                        <div className="image_bars">
                            <Image src={card.image} alt={card.title} />
                        </div>
                        <Card.Body className="text-center card-body">
                            <h1 className="bars_title">{card.title}</h1>
                            <p className="bars_des">{card.description}</p>
                            <div className="overlay"></div>
                            <div className="view-details-btn-container">
                                <button className="btn-12" onClick={() => handleShow(card)}>
                                    <span>View Details</span>
                                </button>
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
};

export default YallaShopNuts;
