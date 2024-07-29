'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import nutone from '../../Assets/HomePageAssets/shopsAssets/nutone.png';
import nuttwo from '../../Assets/HomePageAssets/shopsAssets/nuttwo.png';
import nutthree from '../../Assets/HomePageAssets/shopsAssets/nutthree.png';
import nutfour from '../../Assets/HomePageAssets/shopsAssets/nutfour.png'
import nutfive from '../../Assets/HomePageAssets/shopsAssets/nutfive.png'
import nutsix from '../../Assets/HomePageAssets/shopsAssets/nutsix.png'
import nutsdetailsone from '../../Assets/HomePageAssets/shopsAssets/nutsdetailsone.png'
import nutsdetailstfive from '../../Assets/HomePageAssets/shopsAssets/nutsdetailstfive.png'
import nutsdetailstfour from '../../Assets/HomePageAssets/shopsAssets/nutsdetailstfour.png'
import nutsdetails from '../../Assets/HomePageAssets/shopsAssets/nutsdetails.png'
import nutsdetailsthree from '../../Assets/HomePageAssets/shopsAssets/nutsdetailsthree.png'
import nutsdetailstwo from '../../Assets/HomePageAssets/shopsAssets/nutsdetailstwo.png'
import AOS from 'aos';
import Image from 'next/image';
import '../shopStyle.css';
import { Button, Col, Row } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";

const YallaShopNuts = () => {
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
        // {
        //     title: 'MANI YUMMY BARBEQUE',
        //     description: 'A high energy snack bar',
        //     image: nutthree,
        //     detaildes:
        //         'Carefully selected large, crunchy cashews, cleaned then dry roasted with fresh ground black pepper and sea salt.',
        //     detailsImage: nutsdetailstfour,
        // },
        // {
        //     title: 'MANI YUMMY BERRY N’ NUTS',
        //     description: 'A high energy snack bar',
        //     image: nutone,
        //     detaildes:
        //         'Carefully selected large, crunchy cashews, cleaned then dry roasted with fresh ground black pepper and sea salt.',
        //     detailsImage: nutsdetailsone,
        // },

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
                                <button className="btn-12" onClick={() => handleShow(card)} ><span>View Details</span></button>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            ))}


            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Body className="modal_bg_color">
                    <Button onClick={handleClose} style={{ backgroundColor: 'transparent' }}>
                        <IoMdArrowRoundBack style={{ fontSize: '34px', color: 'black' }} />
                    </Button>
                    <Row className="mt-3">
                        <Col
                            xs={12}
                            md={6}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', width: '100%', maxWidth: 600, margin: 'auto' }}
                        >
                            <div className="YallahealthyBarcontainer">
                                <h1 className="healthybar">
                                    <span style={{ color: '#4BC6DA' }}>YALLA</span> Healthy Bars
                                </h1>
                                <div>
                                    <h1 className="almondtext">{selectedProduct?.title}</h1>
                                </div>
                                <div>
                                    <p className="ptag mt-3">{selectedProduct?.detaildes}</p>
                                    {/* <ul className="ptag">
                                        <li>Gluten free</li>
                                        <li>Organic</li>
                                        <li>Vegan</li>
                                    </ul> */}
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="YallahealthyBarcontainer mb-3">
                                <Image
                                    src={selectedProduct?.detailsImage || selectedProduct?.image}
                                    alt={selectedProduct?.title}
                                    className="productImage_modal"
                                />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default YallaShopNuts;
