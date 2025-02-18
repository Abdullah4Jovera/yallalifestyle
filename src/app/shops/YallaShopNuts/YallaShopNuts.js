'use client';
import React, { useState, useEffect } from 'react';
import { Card, Modal ,Table } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';
import 'reactjs-popup/dist/index.css';
import '../shopStyle.css';
import '../shopButton.css';

import RawNuts from '../../Assets/YallaNuts/RawNuts.png'
import dryfruits from '../../Assets/YallaNuts/dryfruits.png'
import cocktailnuts from '../../Assets/YallaNuts/cocktailnuts.png'
import cashewnuts from '../../Assets/YallaNuts/cashewnuts.png'

const YallaShopNuts = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    }

    const cards = [
        {
            title: 'Tong Garden (cashew nuts)',
            description: 'Raw Nuts',
            image: RawNuts,
            detaildes: "HEALTHY NUTS",
            detailsImage: RawNuts,
            Weight_gram: '150ml',
            Packing_Case: '12',
            Weight_gram: '330ml',
            Packing_Case: '12',
        },
        {
            title: 'Tong Garden (cocktail nuts)',
            description: 'Cocktail Nuts',
            image: dryfruits,
            detaildes: "Cocktail Nuts",
            detailsImage: dryfruits,
            Weight_gram: '150ml',
            Packing_Case: '12',
        },
        {
            title: 'Healthy Raw Nuts w/ dry fruits',
            description: 'Dry Fruits',
            image: cocktailnuts,
            detaildes: "Cocktail Nuts",
            detailsImage: cocktailnuts,
            Weight_gram: '180ml',
            Packing_Case: '12',
        },
        {
            title: 'Nutsy Healthy Raw Nuts',
            description: 'Healthy Raw Nuts',
            image: cashewnuts,
            detaildes: "Cocktail Nuts",
            detailsImage: cashewnuts,
            Weight_gram: '180ml',
            Packing_Case: '12',
        },

    ];

    return (
        <div className="shop-container">
            {cards.map((card, index) => (
                <Card key={index} className=" nuts_seperate_class All_shop_card_class" data-aos="fade-up" data-aos-duration="1000" onClick={() => handleShow(card)}>
                    <div className="card-content">
                        <div className="image_bars">
                            <Image src={card.image} alt={card.title} className='image_drink' />
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
                <Modal show={show} onHide={handleClose} centered size='lg'>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                        <div className="detailsImage_selected_container">
                            <Image src={selectedProduct.detailsImage} alt={selectedProduct.title} className="detailsImage_selected" />
                        </div>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th style={{ backgroundColor: '#abe6f6' }}>Brand</th>
                                    <th style={{ backgroundColor: '#abe6f6' }}>Weight (grams)</th>
                                    <th style={{ backgroundColor: '#abe6f6' }}>Packing / Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedProduct.description}</td>
                                    <td>{selectedProduct.Weight_gram}</td>
                                    <td>{selectedProduct.Packing_Case}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default YallaShopNuts;
