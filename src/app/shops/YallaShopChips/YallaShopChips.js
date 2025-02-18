'use client'
import React, { useState, useEffect } from 'react';
import { Card, Table, Modal, Button } from 'react-bootstrap';

import quinoasundriedtomatostd from '../../Assets/Yallachips/quinoasundriedtomatostd.png'
import quinoasourcreamchive from '../../Assets/Yallachips/quinoasourcreamchive.png'
import quinoachillifreshlime from '../../Assets/Yallachips/quinoachillifreshlime.png'
import lentilchipscreamydil from '../../Assets/Yallachips/lentilchipscreamydil.png'
import lentilchipschillilemon from '../../Assets/Yallachips/lentilchipschillilemon.png'
import hummuschipsseasalt from '../../Assets/Yallachips/hummuschipsseasalt.png'
import hummuschipschillilemon from '../../Assets/Yallachips/hummuschipschillilemon.png'

import cheese from '../../Assets/Yallachips/cheese.png'
import pepper from '../../Assets/Yallachips/pepper.png'
import tomatoket from '../../Assets/Yallachips/tomatoket.png'
import normalchilli from '../../Assets/Yallachips/normalchilli.png'
import normalketchup from '../../Assets/Yallachips/normalketchup.png'
import normalsaltvinegar from '../../Assets/Yallachips/normalsaltvinegar.png'
import normalcheese from '../../Assets/Yallachips/normalcheese.png'
import normalsalt from '../../Assets/Yallachips/normalsalt.png'

import Doritonachocheese from '../../Assets/Yallachips/Doritonachocheese.png'
import Doritosweetchilli from '../../Assets/Yallachips/Doritosweetchilli.png'
import Sunbitebitescheeseherbs from '../../Assets/Yallachips/Sunbitebitescheeseherbs.png'
import Sunbiteoliveoregano from '../../Assets/Yallachips/Sunbiteoliveoregano.png'
import RealCrispssweetchilli from '../../Assets/Yallachips/RealCrispssweetchilli.png'
import RealCrispsstrongcheeseonion from '../../Assets/Yallachips/RealCrispsstrongcheeseonion.png'
import RealCrispsjalapenopepper from '../../Assets/Yallachips/RealCrispsjalapenopepper.png'
import RealCrispsseasalt from '../../Assets/Yallachips/RealCrispsseasalt.png'
import RealCrispsseasaltmaltvinegar from '../../Assets/Yallachips/RealCrispsseasaltmaltvinegar.png'

import BurstSweetChilli from '../../Assets/Yallachips/BurstSweetChilli.png'
import BurstSeaSalt from '../../Assets/Yallachips/BurstSeaSalt.png'
import BurstSaltBlackPepper from '../../Assets/Yallachips/BurstSaltBlackPepper.png'
import BurstMatureChed from '../../Assets/Yallachips/BurstMatureChed.png'

import Pringlesoriginal from '../../Assets/Yallachips/Pringlesoriginal.png'
import Pringlessourcreamonion from '../../Assets/Yallachips/Pringlessourcreamonion.png'
import Pringleshotspicy from '../../Assets/Yallachips/Pringleshotspicy.png'
import Pringlessaltvinegar from '../../Assets/Yallachips/Pringlessaltvinegar.png'
import Pringlesketchup from '../../Assets/Yallachips/Pringlesketchup.png'

import AOS from 'aos';
import Image from 'next/image';
import '../shopStyle.css';
import '../shopButton.css';
import 'reactjs-popup/dist/index.css';

const YallaChipsShops = () => {
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
      title: 'EAT REAL CHIPS (quinoa sundried tomato & rstd)',
      description: 'Gluten Free',
      image: quinoasundriedtomatostd,
      detaildes: "Gluten Free",
      detailsImage: quinoasundriedtomatostd,
      Weight_gram: '30g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },
    {
      title: 'EAT REAL CHIPS (quinoa sour cream & chive)',
      description: 'Gluten Free',
      image: quinoasourcreamchive,
      detaildes: "Gluten Free",
      detailsImage: quinoasourcreamchive,
      Weight_gram: '30g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },
    {
      title: 'EAT REAL CHIPS (quinoa chilli & fresh lime)',
      description: 'Gluten Free',
      image: quinoachillifreshlime,
      detaildes: "Gluten Free",
      detailsImage: quinoachillifreshlime,
      Weight_gram: '30g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },
    {
      title: 'EAT REAL CHIPS (lentil chips creamy dil)',
      description: 'Gluten Free',
      image: lentilchipscreamydil,
      detaildes: "Gluten Free",
      detailsImage: lentilchipscreamydil,
      Weight_gram: '40g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },

    {
      title: 'EAT REAL CHIPS (hummus chips chilli & lemon)',
      description: 'Gluten Free',
      image: lentilchipschillilemon,
      detaildes: "Gluten Free",
      detailsImage: lentilchipschillilemon,
      Weight_gram: '45g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },

    {
      title: 'EAT REAL CHIPS (hummus chips sea salt)',
      description: 'Gluten Free',
      image: hummuschipsseasalt,
      detaildes: "Gluten Free",
      detailsImage: hummuschipsseasalt,
      Weight_gram: '45g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },

    {
      title: 'EAT REAL CHIPS (hummus chips chilli& lemon)',
      description: 'Gluten Free',
      image: hummuschipschillilemon,
      detaildes: "Gluten Free",
      detailsImage: hummuschipschillilemon,
      Weight_gram: '45g',
      Packing_Case: '12',
      Category: 'Vegan Chips',
    },

    {
      title: 'LAYS FORNO (cheese)',
      description: 'FORNO CHIPS',
      image: cheese,
      detaildes: "FORNO CHIPS",
      detailsImage: cheese,
      Weight_gram: '43g',
      Packing_Case: '21',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS FORNO (pepper)',
      description: 'FORNO (pepper)',
      image: pepper,
      detaildes: "FORNO (pepper)",
      detailsImage: pepper,
      Weight_gram: '43g',
      Packing_Case: '21',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS FORNO (tomato ket)',
      description: 'FORNO (tomato ket)',
      image: tomatoket,
      detaildes: "FORNO (tomato ket)",
      detailsImage: tomatoket,
      Weight_gram: '40g',
      Packing_Case: '21',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS NORMAL (chilli)',
      description: 'NORMAL (chilli)',
      image: normalchilli,
      detaildes: "NORMAL (chilli)",
      detailsImage: normalchilli,
      Weight_gram: '40g',
      Packing_Case: '50',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS NORMAL (ketchup)',
      description: 'NORMAL (ketchup)',
      image: normalketchup,
      detaildes: "NORMAL (ketchup)",
      detailsImage: normalketchup,
      Weight_gram: '40g',
      Packing_Case: '50',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS NORMAL (salt & vinegar)',
      description: 'NORMAL (salt & vinegar)',
      image: normalsaltvinegar,
      detaildes: "NORMAL (salt & vinegar)",
      detailsImage: normalsaltvinegar,
      Weight_gram: '40g',
      Packing_Case: '50',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS NORMAL (cheese)',
      description: 'NORMAL (cheese)',
      image: normalcheese,
      detaildes: "NORMAL (cheese)",
      detailsImage: normalcheese,
      Weight_gram: '40g',
      Packing_Case: '50',
      Category: 'Baked Chips',
    },
    {
      title: 'LAYS NORMAL (Salt)',
      description: 'NORMAL (Salt)',
      image: normalsalt,
      detaildes: "NORMAL (Salt)",
      detailsImage: normalsalt,
      Weight_gram: '40g',
      Packing_Case: '50',
      Category: 'Baked Chips',
    },

    {
      title: 'Doritos (nacho cheese)',
      description: 'HANDCOOKED CRISPS',
      image: Doritonachocheese,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: Doritonachocheese,
      Weight_gram: '48g',
      Packing_Case: '20',
      Category: 'Bread Chips',
    },
    {
      title: 'Doritos (sweet chilli)',
      description: 'HANDCOOKED CRISPS',
      image: Doritosweetchilli,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: Doritosweetchilli,
      Weight_gram: '48g',
      Packing_Case: '20',
      Category: 'Bread Chips',
    },
    {
      title: 'Sunbitebread bites (cheese & herbs)',
      description: 'HANDCOOKED CRISPS',
      image: Sunbitebitescheeseherbs,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: Sunbitebitescheeseherbs,
      Weight_gram: '50g',
      Packing_Case: '20',
      Category: 'Bread Chips',
    },
    {
      title: 'Sunbitebread bites (olive & oregano)',
      description: 'HANDCOOKED CRISPS',
      image: Sunbiteoliveoregano,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: Sunbiteoliveoregano,
      Weight_gram: '50g',
      Packing_Case: '20',
      Category: 'Bread Chips',
    },
    {
      title: 'Real Crisps (sweet chilli)',
      description: 'HANDCOOKED CRISPS',
      image: RealCrispssweetchilli,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: RealCrispssweetchilli,
      Weight_gram: '35g',
      Packing_Case: '24',
      Category: 'Bread Chips',
    },
    {
      title: 'Real Crisps (strong cheese & onion)',
      description: 'HANDCOOKED CRISPS',
      image: RealCrispsstrongcheeseonion,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: RealCrispsstrongcheeseonion,
      Weight_gram: '35g',
      Packing_Case: '24',
      Category: 'Bread Chips',
    },
    {
      title: 'Real Crisps (jalapeno pepper)',
      description: 'HANDCOOKED CRISPS',
      image: RealCrispsjalapenopepper,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: RealCrispsjalapenopepper,
      Weight_gram: '35g',
      Packing_Case: '24',
      Category: 'Bread Chips',
    },
    {
      title: 'Real Crisps ( sea salt)',
      description: 'HANDCOOKED CRISPS',
      image: RealCrispsseasalt,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: RealCrispsseasalt,
      Weight_gram: '35g',
      Packing_Case: '24',
      Category: 'Bread Chips',
    },
    {
      title: 'Real Crisps ( sea salt & malt vinegar)',
      description: 'HANDCOOKED CRISPS',
      image: RealCrispsseasaltmaltvinegar,
      detaildes: "HANDCOOKED CRISPS",
      detailsImage: RealCrispsseasaltmaltvinegar,
      Weight_gram: '35g',
      Packing_Case: '24',
      Category: 'Bread Chips',
    },

    {
      title: 'Burst Crisps Sweet Chilli',
      description: 'Burst Crisps',
      image: BurstSweetChilli,
      detaildes: "Burst Crisps",
      detailsImage: BurstSweetChilli,
      Weight_gram: '40g',
      Packing_Case: '20',
      Category: 'HandCooked Chips',
    },
    {
      title: 'Burst Crisps Sea Salt',
      description: 'Burst Crisps',
      image: BurstSeaSalt,
      detaildes: "Burst Crisps",
      detailsImage: BurstSeaSalt,
      Weight_gram: '40g',
      Packing_Case: '20',
      Category: 'HandCooked Chips',
    },

    {
      title: 'Burst Crisps Salt & Black Pepper',
      description: 'Burst Crisps',
      image: BurstSaltBlackPepper,
      detaildes: "Burst Crisps",
      detailsImage: BurstSaltBlackPepper,
      Weight_gram: '40g',
      Packing_Case: '20',
      Category: 'HandCooked Chips',
    },

    {
      title: 'Burst Crisps Mature Ched',
      description: 'Burst Crisps',
      image: BurstMatureChed,
      detaildes: "Burst Crisps",
      detailsImage: BurstMatureChed,
      Weight_gram: '40g',
      Packing_Case: '20',
      Category: 'HandCooked Chips',
    },


    {
      title: 'Pringles Chips (original)',
      description: 'Pringles Chips',
      image: Pringlesoriginal,
      detaildes: "Pringles Chips",
      detailsImage: Pringlesoriginal,
      Weight_gram: '40g',
      Packing_Case: '12',
      Category: 'Stix Chips',
    },

    {
      title: 'Pringles Chips (sour cream onion)',
      description: 'Pringles Chips',
      image: Pringlessourcreamonion,
      detaildes: "Pringles Chips",
      detailsImage: Pringlessourcreamonion,
      Weight_gram: '40g',
      Packing_Case: '12',
      Category: 'Stix Chips',
    },

    {
      title: 'Pringles Chips (hot & spicy)',
      description: 'Pringles Chips',
      image: Pringleshotspicy,
      detaildes: "Pringles Chips",
      detailsImage: Pringleshotspicy,
      Weight_gram: '40g',
      Packing_Case: '12',
      Category: 'Stix Chips',
    },

    {
      title: 'Pringles Chips (salt & vinegar)',
      description: 'Pringles Chips',
      image: Pringlessaltvinegar,
      detaildes: "Pringles Chips",
      detailsImage: Pringlessaltvinegar,
      Weight_gram: '40g',
      Packing_Case: '12',
      Category: 'Stix Chips',
    },

    {
      title: 'Pringles Chips (ketchup)',
      description: 'Pringles Chips',
      image: Pringlesketchup,
      detaildes: "Pringles Chips",
      detailsImage: Pringlesketchup,
      Weight_gram: '40g',
      Packing_Case: '12',
      Category: 'Stix Chips',
    },
  ];

  const categories = ['All', ...new Set(cards.map(item => item.Category))];
  const filteredChips = category === 'All' ? cards : cards.filter(item => item.Category === category);

  return (
    <div className="shop-container">
      <div className="category-buttons text-center mt-3">
        {categories.map((cat, index) => (
          <button key={index} className="mx-1 btn_subcategory" onClick={() => setCategory(cat)}>
            <span style={{ fontSize: '14px', fontWeight: '500' }} >{cat}</span>
          </button>
        ))}
      </div>

      <div className="shop-container">
        {filteredChips.map((card, index) => (
          <Card key={index} className='All_shop_card_class'
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => handleShow(card)}
          >
            <div className='card-content'>
              <div className='image_bars' >
                <Image src={card.image} alt={card.title} className='image_drink' />
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
}

export default YallaChipsShops;
