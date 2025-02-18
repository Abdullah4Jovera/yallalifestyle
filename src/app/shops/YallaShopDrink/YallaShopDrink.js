'use client';

import React, { useState, useEffect } from 'react';
import { Card, Table, Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';
import 'reactjs-popup/dist/index.css';
import '../shopStyle.css';
import '../shopButton.css';

import boostone from '../../Assets/YallaDrinksAssets/Boostdrinks/boostone.png';
import boosttwo from '../../Assets/YallaDrinksAssets/Boostdrinks/boosttwo.png';
import boostthree from '../../Assets/YallaDrinksAssets/Boostdrinks/boostthree.png';
import Antioxidant from '../../Assets/YallaDrinksAssets/Vitamenwell/Antioxidant.png';
import Care from '../../Assets/YallaDrinksAssets/Vitamenwell/Care.png';
import Hydrate from '../../Assets/YallaDrinksAssets/Vitamenwell/Hydrate.png';
import Reload from '../../Assets/YallaDrinksAssets/Vitamenwell/Reload.png';
import Upgrade from '../../Assets/YallaDrinksAssets/Vitamenwell/Upgrade.png';
import strawberry from '../../Assets/YallaDrinksAssets/proteins/strawberry.png';
import vanilla from '../../Assets/YallaDrinksAssets/proteins/vanilla.png';
import choclate from '../../Assets/YallaDrinksAssets/proteins/choclate.png';
import bluebolt from '../../Assets/YallaDrinksAssets/energydrinks/bluebolt.png';
import grapes from '../../Assets/YallaDrinksAssets/energydrinks/grapes.png';
import lemon from '../../Assets/YallaDrinksAssets/energydrinks/lemon.png';
import orangechill from '../../Assets/YallaDrinksAssets/energydrinks/orangechill.png';
import tropical from '../../Assets/YallaDrinksAssets/energydrinks/tropical.png';
import Oronamin from '../../Assets/YallaDrinksAssets/energydrinks/Oronamin.png'
import OronaminC from '../../Assets/YallaDrinksAssets/energydrinks/OronaminC.png'

import acquapanna from '../../Assets/YallaDrinksAssets/sparklingwater/acquapanna.png'
import alain from '../../Assets/YallaDrinksAssets/sparklingwater/alain.png'
import fiji from '../../Assets/YallaDrinksAssets/sparklingwater/fiji330ml.png'
import spmineralwater from '../../Assets/YallaDrinksAssets/sparklingwater/spmineralwater.png'

import CocaCola from '../../Assets/YallaDrinksAssets/redbulldrinks/CocaCola330ml.png'
import CokeLight from '../../Assets/YallaDrinksAssets/redbulldrinks/CokeLight330ml.png'
import CokeZero from '../../Assets/YallaDrinksAssets/redbulldrinks/CokeZero330ml.png'
import Rebdull from '../../Assets/YallaDrinksAssets/redbulldrinks/Rebdull.png'
import RebdullRedEdition from '../../Assets/YallaDrinksAssets/redbulldrinks/RebdullRedEdition.png'
import RebdullSugarFree from '../../Assets/YallaDrinksAssets/redbulldrinks/RebdullSugarFree.png'
import RebdullYellowEdition from '../../Assets/YallaDrinksAssets/redbulldrinks/RebdullYellowEdition.png'
import SchwGingerAle330ml from '../../Assets/YallaDrinksAssets/redbulldrinks/SchwGingerAle330ml.png'
import Sprite330ml from '../../Assets/YallaDrinksAssets/redbulldrinks/Sprite330ml.png'

import MountainSpring from '../../Assets/springwaterdrink/MountainSpring.png'
import PocariSweat from '../../Assets/springwaterdrink/PocariSweat.png'

import Pokkasports from '../../Assets/Pokksdrinks/Pokkasports.png'
import Pokkalemonjuice from '../../Assets/Pokksdrinks/Pokkalemonjuice.png'
import PokkaIceTeabottlepeach from '../../Assets/Pokksdrinks/PokkaIceTeabottlepeach.png'
import PokkaIceTeabottlelemon from '../../Assets/Pokksdrinks/PokkaIceTeabottlelemon.png'

import VimtoCan from '../../Assets/juices/VimtoCan.png'
import puremangosteen from '../../Assets/juices/puremangosteen.png'
import passionorange from '../../Assets/juices/passionorange.png'
import mangolychee from '../../Assets/juices/mangolychee.png'
import mangojuice from '../../Assets/juices/mangojuice.png'
import VimtoPet from '../../Assets/juices/VimtoPet.png'
import VitaCocoPurecoconutWater from '../../Assets/juices/VitaCocoPurecoconutWater.png'
import JustPickedCocoWater from '../../Assets/juices/JustPickedCocoWater.png'
import CelebeOrganicCocoWater from '../../Assets/juices/CelebeOrganicCocoWater.png'


const YallaShopDrink = () => {
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [category, setCategory] = useState('All');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };

    const cards = [
        {
            title: 'Boost Sport Isotonic Mixed Berry',
            description: 'Boost Sports Drinks',
            image: boostone,
            detaildes: "Boost Sport Isotonic Mixed Berry",
            detailsImage: boostone,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Boost Sport Isotonic',
        },
        {
            title: 'Boost Sport Isotonic Orange',
            description: 'Boost Sports Drinks',
            image: boostthree,
            detaildes: "Boost Sport Isotonic Mixed Berry",
            detailsImage: boostthree,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Boost Sport Isotonic',
        },
        {
            title: 'Boost Sport Isotonic Topical Berry',
            description: 'Boost Sports Drinks',
            image: boosttwo,
            detaildes: 'Boost Sport Isotonic Topical Berry',
            detailsImage: boosttwo,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Boost Sport Isotonic',
        },
        {
            title: 'Vitamin Well -Antioxidant',
            description: 'Vitamin Well',
            image: Antioxidant,
            detaildes: 'Vitamin Well -Antioxidant',
            detailsImage: Antioxidant,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Vitamin Well',
        },
        {
            title: 'Vitamin Well -Care',
            description: 'Vitamin Well',
            image: Care,
            detaildes: 'Vitamin Well -Care',
            detailsImage: Care,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Vitamin Well',
        },
        {
            title: 'Vitamin Well -Hydrate',
            description: 'Vitamin Well',
            image: Hydrate,
            detaildes: 'Vitamin Well -Hydrate',
            detailsImage: Hydrate,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Vitamin Well',
        },
        {
            title: 'Vitamin Well -Reload',
            description: 'Vitamin Well',
            image: Reload,
            detaildes: 'Vitamin Well -Reload',
            detailsImage: Reload,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Vitamin Well',
        },
        {
            title: 'Vitamin Well -Upgrade',
            description: 'Vitamin Well',
            image: Upgrade,
            detaildes: 'Vitamin Well -Upgrade',
            detailsImage: Upgrade,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Vitamin Well',
        },
        {
            title: 'Protein -Strawberry Flavour',
            description: 'Barebells Milkshake',
            image: strawberry,
            detaildes: 'Vitamin Well -Upgrade',
            detailsImage: strawberry,
            Weight_gram: '330ml',
            Packing_Case: '8',
            Category: 'Barebells Milkshake',
        },
        {
            title: 'Protein -Vanilla Flavour',
            description: 'Barebells Milkshake',
            image: vanilla,
            detaildes: 'Vitamin Well -Upgrade',
            detailsImage: vanilla,
            Weight_gram: '330ml',
            Packing_Case: '8',
            Category: 'Barebells Milkshake',
        },
        {
            title: 'Protein -Chocolate Flavour',
            description: 'Barebells Milkshake',
            image: choclate,
            detaildes: 'Vitamin Well -Upgrade',
            detailsImage: choclate,
            Weight_gram: '330ml',
            Packing_Case: '8',
            Category: 'Barebells Milkshake',
        },
        {
            title: 'Gatorade - Blue Bolt',
            description: 'Energy Drinks',
            image: bluebolt,
            detaildes: 'Gatorade',
            detailsImage: bluebolt,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Energy Drinks',
        },
        {
            title: 'Gatorade - Orange Chill',
            description: 'Energy Drinks',
            image: orangechill,
            detaildes: 'Gatorade',
            detailsImage: orangechill,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Energy Drinks',
        },
        {
            title: 'Gatorade - Grapes',
            description: 'Energy Drinks',
            image: grapes,
            detaildes: 'Gatorade',
            detailsImage: grapes,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Energy Drinks',
        },
        {
            title: 'Gatorade - Lemon Lime',
            description: 'Energy Drinks',
            image: lemon,
            detaildes: 'Gatorade',
            detailsImage: lemon,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Energy Drinks',
        },
        {
            title: 'Gatorade - Tropical Fruit',
            description: 'Energy Drinks',
            image: tropical,
            detaildes: 'Gatorade',
            detailsImage: tropical,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Energy Drinks',
        },
        {
            title: 'Oronamin C Health Drinks',
            description: 'Energy Drinks',
            image: OronaminC,
            detaildes: 'Energy Drinks',
            detailsImage: OronaminC,
            Weight_gram: '120ml',
            Packing_Case: '50',
            Category: 'Energy Drinks',
        },
        {
            title: 'Pokka Vitaene C Extra',
            description: 'Energy Drinks',
            image: Oronamin,
            detaildes: 'Energy Drinks',
            detailsImage: Oronamin,
            Weight_gram: '240ml',
            Packing_Case: '24',
            Category: 'Energy Drinks',
        },
        {
            title: 'Acqua Panna',
            description: 'Acqua Panna',
            image: acquapanna,
            detaildes: 'Gatorade',
            detailsImage: acquapanna,
            Weight_gram: '500ml',
            Packing_Case: '4x6',
            Category: 'Sparkling / Normal Water',
        },
        {
            title: 'Al Ain Water',
            description: 'Al Ain Water',
            image: alain,
            detaildes: 'Gatorade',
            detailsImage: alain,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Sparkling / Normal Water',
        },
        {
            title: 'Fiji Water 330ml (AR / EN )',
            description: 'FiJi Water',
            image: fiji,
            detaildes: 'FiJi Water',
            detailsImage: fiji,
            Weight_gram: '330ml',
            Packing_Case: '36',
            Category: 'Sparkling / Normal Water',
        },
        {
            title: 'Fiji Water 500ml (AR / EN )',
            description: 'FiJi Water',
            image: fiji,
            detaildes: 'FiJi Water',
            detailsImage: fiji,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Sparkling / Normal Water',
        },
        {
            title: 'SP Mineral Water 500ml',
            description: 'SP Water',
            image: spmineralwater,
            detaildes: 'SP Water',
            detailsImage: spmineralwater,
            Weight_gram: '500ml',
            Packing_Case: '4x6',
            Category: 'Sparkling / Normal Water',
        },
        {
            title: 'SP Mineral Water 250ml',
            description: 'SP Water',
            image: spmineralwater,
            detaildes: 'SP Water',
            detailsImage: spmineralwater,
            Weight_gram: '250ml',
            Packing_Case: '4x6',
            Category: 'Sparkling / Normal Water',
        },
        {
            title: 'Coca Cola 330ml',
            description: 'Coca Cola',
            image: CocaCola,
            detaildes: 'Coca Cola 330ml',
            detailsImage: CocaCola,
            Weight_gram: '330ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Coke Light 330ml',
            description: 'Coca Cola',
            image: CokeLight,
            detaildes: 'Coca Cola 330ml',
            detailsImage: CokeLight,
            Weight_gram: '330ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Coke Zero 330ml',
            description: 'Coca Cola',
            image: CokeZero,
            detaildes: 'Coca Cola 330ml',
            detailsImage: CokeZero,
            Weight_gram: '330ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Rebdull(EN / AR)',
            description: 'Rebdull',
            image: Rebdull,
            detaildes: 'Rebdull',
            detailsImage: Rebdull,
            Weight_gram: '250ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Rebdull Red Edition',
            description: 'Rebdull',
            image: RebdullRedEdition,
            detaildes: 'Rebdull',
            detailsImage: RebdullRedEdition,
            Weight_gram: '250ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Rebdull Sugar Free',
            description: 'Rebdull',
            image: RebdullSugarFree,
            detaildes: 'Rebdull',
            detailsImage: RebdullSugarFree,
            Weight_gram: '250ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Rebdull Yellow Edition',
            description: 'Rebdull',
            image: RebdullYellowEdition,
            detaildes: 'Rebdull',
            detailsImage: RebdullYellowEdition,
            Weight_gram: '250ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Sprite 330ml',
            description: 'Rebdull',
            image: SchwGingerAle330ml,
            detaildes: 'Rebdull',
            detailsImage: SchwGingerAle330ml,
            Weight_gram: '330ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Schw Ginger Ale 330ml',
            description: 'Rebdull',
            image: Sprite330ml,
            detaildes: 'Rebdull',
            detailsImage: Sprite330ml,
            Weight_gram: '330ml',
            Packing_Case: '24',
            Category: 'Coca Cola / Redbull',
        },
        {
            title: 'Pocari Sweat',
            description: 'Wow Hydrate',
            image: PocariSweat,
            detaildes: 'Wow Hydrate',
            detailsImage: PocariSweat,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Spring Water / Electrolytes',
        },
        {
            title: 'Mountain Spring Water',
            description: 'Alkaline',
            image: MountainSpring,
            detaildes: 'Alkaline',
            detailsImage: MountainSpring,
            Weight_gram: '500ml',
            Packing_Case: '12',
            Category: 'Spring Water / Electrolytes',
        },
        {
            title: 'Pokka Sports water',
            description: 'Pokka Sports water',
            image: Pokkasports,
            detaildes: 'Pokka Sports water',
            detailsImage: Pokkasports,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Pokka Sports Drinks',
        },
        {
            title: 'Pokka Ice Tea bottle-lemon',
            description: 'Pokka Ice Tea bottle-lemon',
            image: PokkaIceTeabottlelemon,
            detaildes: 'Pokka Ice Tea bottle-lemon',
            detailsImage: PokkaIceTeabottlelemon,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Pokka Sports Drinks',
        },
        {
            title: 'Pokka Ice Tea bottle -peach',
            description: 'Pokka Ice Tea bottle -peach',
            image: PokkaIceTeabottlepeach,
            detaildes: 'Pokka Ice Tea bottle -peach',
            detailsImage: PokkaIceTeabottlepeach,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Pokka Sports Drinks',
        },
        {
            title: 'PokkaLife Plus -lemon juice',
            description: 'PokkaLife Plus -lemon juice',
            image: Pokkalemonjuice,
            detaildes: 'PokkaLife Plus -lemon juice',
            detailsImage: Pokkalemonjuice,
            Weight_gram: '500ml',
            Packing_Case: '24',
            Category: 'Pokka Sports Drinks',
        },
        {
            title: 'Vimto Can',
            description: 'Vimto Can',
            image: VimtoCan,
            detaildes: 'Vimto Can',
            detailsImage: VimtoCan,
            Weight_gram: '250ml',
            Packing_Case: '30',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Lily Fresh 100% (pure mangosteen)',
            description: 'Pure Mangosteen',
            image: puremangosteen,
            detaildes: 'Pure Mangosteen',
            detailsImage: puremangosteen,
            Weight_gram: '180ml',
            Packing_Case: '24',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Lily Fresh 100% (passion orange)',
            description: 'Passion Orange',
            image: passionorange,
            detaildes: 'Passion Orange',
            detailsImage: passionorange,
            Weight_gram: '180ml',
            Packing_Case: '24',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Lily Fresh 100% (mango lychee)',
            description: 'Mango Lychee',
            image: mangolychee,
            detaildes: 'Mango Lychee',
            detailsImage: mangolychee,
            Weight_gram: '180ml',
            Packing_Case: '24',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Lily Fresh 100% (Mango Juice)',
            description: 'Mango Juice',
            image: mangojuice,
            detaildes: 'Mango Juice',
            detailsImage: mangojuice,
            Weight_gram: '180ml',
            Packing_Case: '24',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Vimto Pet',
            description: 'Vimto Pet',
            image: VimtoPet,
            detaildes: 'Vimto Pet',
            detailsImage: VimtoPet,
            Weight_gram: '250ml',
            Packing_Case: '24',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Vita Coco Pure coconut Water',
            description: 'Vita Coco Pure coconut Water',
            image: VitaCocoPurecoconutWater,
            detaildes: 'Vita Coco Pure coconut Water',
            detailsImage: VitaCocoPurecoconutWater,
            Weight_gram: '330ml',
            Packing_Case: '12',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Celebes Organic Coco Water',
            description: 'Celebes Organic Coco Water',
            image: CelebeOrganicCocoWater,
            detaildes: 'Celebes Organic Coco Water',
            detailsImage: CelebeOrganicCocoWater,
            Weight_gram: '330ml',
            Packing_Case: '12',
            Category: 'Coconut Water & Juices',
        },
        {
            title: 'Just Picked Coco Water',
            description: 'Just Picked Coco Water',
            image: JustPickedCocoWater,
            detaildes: 'Just Picked Coco Water',
            detailsImage: JustPickedCocoWater,
            Weight_gram: '330ml',
            Packing_Case: '12',
            Category: 'Coconut Water & Juices',
        },
    ];

    const categories = ['All', ...new Set(cards.map(item => item.Category))];
    const filteredDrinks = category === 'All' ? cards : cards.filter(item => item.Category === category);

    return (
        <div className="shop-container">
            <div className="category-buttons text-center mt-2">
                {categories.map((cat, index) => (
                    <button key={index} className="mx-1 btn_subcategory" onClick={() => setCategory(cat)}>
                        <span style={{ fontSize: '14px', fontWeight: '500' }} >{cat}</span>
                    </button>
                ))}
            </div>

            <div className="shop-container">
                {filteredDrinks.map((card, index) => (
                    <Card key={index} className='All_shop_card_class' data-aos="fade-up" data-aos-duration="1000" onClick={() => handleShow(card)}>
                        <div className='card-content'>
                            <div className='image_bars'>
                                <Image src={card.image} alt={card.title} className='image_drink' />
                            </div>
                            <Card.Body className='text-center card-body'>
                                <h1 className='bars_title'>{card.title}</h1>
                                <p className='bars_des'>{card.description}</p>
                                <div className='overlay'></div>
                                <div className="view-details-btn-container">
                                    <button className="btn-12" onClick={() => handleShow(card)}><span>View Details</span></button>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </div>

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

export default YallaShopDrink;