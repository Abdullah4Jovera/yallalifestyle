'use client';
import React, { useState, useEffect } from 'react';
import { Card, Table, Modal, Button } from 'react-bootstrap';
import Image from 'next/image';
import AOS from 'aos';
import RaspberryJam from '../../Assets/YallaBars/RaspberryJam.png';
import PancakeCaramel from '../../Assets/YallaBars/PancakeCaramel.png';
import ChocolateCream from '../../Assets/YallaBars/ChocolateCream.png';
import RipVANLowSugarWafeldutchcaramelvanilla from '../../Assets/YallaBars/RipVANLowSugarWafeldutchcaramelvanilla.png';
import RipVANLowSugarWafelsnickerdoodle from '../../Assets/YallaBars/RipVANLowSugarWafelsnickerdoodle.png';
import RipVANLowSugarWafelhoneyoats from '../../Assets/YallaBars/RipVANLowSugarWafelhoneyoats.png';
import RipVANWafelcookiescream from '../../Assets/YallaBars/RipVANWafelcookies&cream.png';
import RipVANPROTENWafelcookiescream from '../../Assets/YallaBars/RipVANPROTENWafelcookies&cream.png';
import RipVANPROTEINWafelsnickerdoodle from '../../Assets/YallaBars/RipVANPROTEINWafelsnickerdoodle.png';
import RipVANPROTEINWafelhoneyoats from '../../Assets/YallaBars/RipVANPROTEINWafelhoney&oats.png';
import WarriorCrunchsaltedcaramel from '../../Assets/YallaBars/WarriorCrunchsaltedcaramel.png';
import WarriorCrunchraspberrylemoncheesecake from '../../Assets/YallaBars/WarriorCrunchraspberrylemoncheesecake.png';
import WarriorCrunchmilkchocococonut from '../../Assets/YallaBars/WarriorCrunchmilkchocococonut.png';
import WarriorCrunchkeylimepie from '../../Assets/YallaBars/WarriorCrunchkeylimepie.png';
import WarriorCrunchdarkchocolatepeanut from '../../Assets/YallaBars/WarriorCrunchdarkchocolatepeanut.png';
import WarriorCrunchchocolatechipcookie from '../../Assets/YallaBars/WarriorCrunchchocolatechipcookie.png';
import Kitkat from '../../Assets/YallaBars/Kitkat.png';
import MMChoco from '../../Assets/YallaBars/MMChoco.png'
import MatesserChoco from '../../Assets/YallaBars/MatesserChoco.png'
import TwixMultipackChocoBig from '../../Assets/YallaBars/TwixMultipackChocoBig.png'
import KinderBueno from '../../Assets/YallaBars/KinderBueno.png'
import SnickersChocoBig from '../../Assets/YallaBars/SnickersChocoBig.png'

import chocolatebrownie from '../../Assets/YallaBars/chocolatebrownie.png'
import chocolatepeanutbutter from '../../Assets/YallaBars/chocolatepeanutbutter.png'
import chocochipcookiedough from '../../Assets/YallaBars/chocochipcookiedough.png'
import cookiescream from '../../Assets/YallaBars/cookiescream.png'
import doublEchocochunk from '../../Assets/YallaBars/doublEchocochunk.png'

import chocolatebrownieflavour from '../../Assets/YallaBars/chocolatebrownieflavour.png'
import chocolatehazelnutwhip from '../../Assets/YallaBars/chocolatehazelnutwhip.png'
import peanutcaramel from '../../Assets/YallaBars/peanutcaramel.png'
import chocolatechoccaramelcookiedough from '../../Assets/YallaBars/chocolatechoccaramelcookiedough.png'
import whitechoccookiedough from '../../Assets/YallaBars/whitechoccookiedough.png'
import chocolatesaltedcaramel from '../../Assets/YallaBars/chocolatesaltedcaramel.png'

import '../shopStyle.css';
import '../shopButton.css';
import 'reactjs-popup/dist/index.css';

const YallaShopBar = () => {
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
      title: 'Snaq Fabriq Pancake Raspberry Jam',
      description: 'Snaq Fabriq Pancake',
      image: RaspberryJam,
      detaildes:
        'Snaq Fabriq Pancake',
      detailsImage: RaspberryJam,
      Weight_gram: '45g',
      Packing_Case: '10',
      Category: 'Protein Barebells',
    },
    {
      title: 'Snaq Fabriq Pancake Caramel',
      description: 'Snaq Fabriq Pancake',
      image: PancakeCaramel,
      detaildes:
        'Snaq Fabriq Pancake',
      detailsImage: PancakeCaramel,
      Weight_gram: '45g',
      Packing_Case: '10',
      Category: 'Protein Barebells',
    },
    {
      title: 'Snaq Fabriq Pancake Chocolate Cream',
      description: 'Snaq Fabriq Pancake',
      image: ChocolateCream,
      detaildes:
        'Snaq Fabriq Pancake',
      detailsImage: ChocolateCream,
      Weight_gram: '45g',
      Packing_Case: '10',
      Category: 'Protein Barebells',
    },


    {
      title: 'Rip VAN Low Sugar Wafel - Dutch Caramel & Vanilla',
      description: 'RIP VAN WAFELS',
      image: RipVANLowSugarWafeldutchcaramelvanilla,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANLowSugarWafeldutchcaramelvanilla,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },
    {
      title: 'Rip VAN PROTEIN Wafel - Snickerdoodle',
      description: 'RIP VAN WAFELS',
      image: RipVANLowSugarWafelsnickerdoodle,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANLowSugarWafelsnickerdoodle,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },
    {
      title: 'Rip VAN Low Sugar Wafel-honey & oats',
      description: 'RIP VAN WAFELS',
      image: RipVANLowSugarWafelhoneyoats,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANLowSugarWafelhoneyoats,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },
    {
      title: 'Rip VAN PROTEIN Wafel-cookies & cream',
      description: 'RIP VAN WAFELS',
      image: RipVANWafelcookiescream,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANWafelcookiescream,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },
    {
      title: 'Rip VAN PROTEIN Wafel -snickerdoodle',
      description: 'RIP VAN WAFELS',
      image: RipVANPROTENWafelcookiescream,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANPROTENWafelcookiescream,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },
    {
      title: 'Rip VAN Low Sugar Wafel -snickerdoodle',
      description: 'RIP VAN WAFELS',
      image: RipVANPROTEINWafelsnickerdoodle,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANPROTEINWafelsnickerdoodle,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },
    {
      title: 'Rip VAN PROTEIN Wafel -honey & oats',
      description: 'RIP VAN WAFELS',
      image: RipVANPROTEINWafelhoneyoats,
      detaildes:
        'RIP VAN WAFELS',
      detailsImage: RipVANPROTEINWafelhoneyoats,
      Weight_gram: '33g',
      Packing_Case: '12',
      Category: 'Rip Van Wafels',
    },


    {
      title: 'Warrior Crunch -salted caramel',
      description: 'WARRIOR PROTEIN BARS',
      image: WarriorCrunchsaltedcaramel,
      detaildes:
        'WARRIOR PROTEIN BARS',
      detailsImage: WarriorCrunchsaltedcaramel,
      Weight_gram: '64g',
      Packing_Case: '12',
      Category: 'Warrior Protein Bars',
    },
    {
      title: 'Warrior Crunch -raspberry lemon cheesecake',
      description: 'WARRIOR PROTEIN BARS',
      image: WarriorCrunchraspberrylemoncheesecake,
      detaildes:
        'WARRIOR PROTEIN BARS',
      detailsImage: WarriorCrunchraspberrylemoncheesecake,
      Weight_gram: '64g',
      Packing_Case: '12',
      Category: 'Warrior Protein Bars',
    },
    {
      title: 'Warrior Crunch -milk chocococonut',
      description: 'WARRIOR PROTEIN BARS',
      image: WarriorCrunchmilkchocococonut,
      detaildes:
        'WARRIOR PROTEIN BARS',
      detailsImage: WarriorCrunchmilkchocococonut,
      Weight_gram: '64g',
      Packing_Case: '12',
      Category: 'Warrior Protein Bars',
    },
    {
      title: 'Warrior Crunch -key lime pie',
      description: 'WARRIOR PROTEIN BARS',
      image: WarriorCrunchkeylimepie,
      detaildes:
        'WARRIOR PROTEIN BARS',
      detailsImage: WarriorCrunchkeylimepie,
      Weight_gram: '64g',
      Packing_Case: '12',
      Category: 'Warrior Protein Bars',
    },
    {
      title: 'Warrior Crunch -dark chocolate peanut',
      description: 'WARRIOR PROTEIN BARS',
      image: WarriorCrunchdarkchocolatepeanut,
      detaildes:
        'WARRIOR PROTEIN BARS',
      detailsImage: WarriorCrunchdarkchocolatepeanut,
      Weight_gram: '64g',
      Packing_Case: '12',
      Category: 'Warrior Protein Bars',
    },
    {
      title: 'Warrior Crunch -chocolate chip cookie',
      description: 'WARRIOR PROTEIN BARS',
      image: WarriorCrunchchocolatechipcookie,
      detaildes:
        'WARRIOR PROTEIN BARS',
      detailsImage: WarriorCrunchchocolatechipcookie,
      Weight_gram: '64g',
      Packing_Case: '12',
      Category: 'Warrior Protein Bars',
    },

    {
      title: 'Kitkat',
      description: 'Chocolates',
      image: Kitkat,
      detaildes:
        'Chocolates',
      detailsImage: Kitkat,
      Weight_gram: '40g',
      Packing_Case: '24',
      Category: 'Chocoloates',
    },
    {
      title: 'M&M Choco',
      description: 'Chocolates',
      image: MMChoco,
      detaildes:
        'Chocolates',
      detailsImage: MMChoco,
      Weight_gram: '45g',
      Packing_Case: '24',
      Category: 'Chocoloates',
    },
    {
      title: 'Matesser Choco',
      description: 'Chocolates',
      image: MatesserChoco,
      detaildes:
        'Chocolates',
      detailsImage: MatesserChoco,
      Weight_gram: '73g',
      Packing_Case: '25',
      Category: 'Chocoloates',
    },
    {
      title: 'Twix Multipack / Choco Big',
      description: 'Chocolates',
      image: TwixMultipackChocoBig,
      detaildes:
        'Chocolates',
      detailsImage: TwixMultipackChocoBig,
      Weight_gram: '50g',
      Packing_Case: '24',
      Category: 'Chocoloates',
    },
    {
      title: 'Kinder Bueno',
      description: 'Chocolates',
      image: KinderBueno,
      detaildes:
        'Chocolates',
      detailsImage: KinderBueno,
      Weight_gram: '43g',
      Packing_Case: '30',
      Category: 'Chocoloates',
    },
    {
      title: 'Snickers Choco Big',
      description: 'Chocolates',
      image: SnickersChocoBig,
      detaildes:
        'Chocolates',
      detailsImage: SnickersChocoBig,
      Weight_gram: '50g',
      Packing_Case: '24',
      Category: 'Chocoloates',
    },


    {
      title: 'Quest N Bar ( chocolate brownie)',
      description: 'OAT KING & QUEST BAR',
      image: chocolatebrownie,
      detaildes:
        'OAT KING & QUEST BAR',
      detailsImage: chocolatebrownie,
      Weight_gram: '60g',
      Packing_Case: '12',
      Category: 'Quest Bars',
    },
    {
      title: 'Quest N Bar ( chocolate peanut butter)',
      description: 'OAT KING & QUEST BAR',
      image: chocolatepeanutbutter,
      detaildes:
        'OAT KING & QUEST BAR',
      detailsImage: chocolatepeanutbutter,
      Weight_gram: '60g',
      Packing_Case: '12',
      Category: 'Quest Bars',
    },
    {
      title: 'Quest N Bar ( chocochip cookie dough)',
      description: 'OAT KING & QUEST BAR',
      image: chocochipcookiedough,
      detaildes:
        'OAT KING & QUEST BAR',
      detailsImage: chocochipcookiedough,
      Weight_gram: '60g',
      Packing_Case: '12',
      Category: 'Quest Bars',
    },
    {
      title: 'Quest N Bar ( cookies & cream)',
      description: 'OAT KING & QUEST BAR',
      image: cookiescream,
      detaildes:
        'OAT KING & QUEST BAR',
      detailsImage: cookiescream,
      Weight_gram: '60g',
      Packing_Case: '12',
      Category: 'Quest Bars',
    },
    {
      title: 'Quest N Bar ( double choco chunk)',
      description: 'OAT KING & QUEST BAR',
      image: doublEchocochunk,
      detaildes:
        'OAT KING & QUEST BAR',
      detailsImage: doublEchocochunk,
      Weight_gram: '60g',
      Packing_Case: '12',
      Category: 'Quest Bars',
    },


    {
      title: 'Fulfill Bar (chocolate brownie flavour)',
      description: 'Protein Bars',
      image: chocolatebrownieflavour,
      detaildes:
        'Protein Bars',
      detailsImage: chocolatebrownieflavour,
      Weight_gram: '55g',
      Packing_Case: '15',
      Category: 'Fulfill Bar',
    },
    {
      title: 'Fulfill Bar (chocolate hazelnut whip)',
      description: 'Protein Bars',
      image: chocolatehazelnutwhip,
      detaildes:
        'Protein Bars',
      detailsImage: chocolatehazelnutwhip,
      Weight_gram: '55g',
      Packing_Case: '15',
      Category: 'Fulfill Bar',
    },
    {
      title: 'Fulfill Bar (peanut & caramel)',
      description: 'Protein Bars',
      image: peanutcaramel,
      detaildes:
        'Protein Bars',
      detailsImage: peanutcaramel,
      Weight_gram: '55g',
      Packing_Case: '15',
      Category: 'Fulfill Bar',
    },
    {
      title: 'Fulfill Bar (chocolate choc & caramel cookie dough)',
      description: 'Protein Bars',
      image: chocolatechoccaramelcookiedough,
      detaildes:
        'Protein Bars',
      detailsImage: chocolatechoccaramelcookiedough,
      Weight_gram: '55g',
      Packing_Case: '15',
      Category: 'Fulfill Bar',
    },
    {
      title: 'Fulfill Bar (white choc & cookie dough)',
      description: 'Protein Bars',
      image: whitechoccookiedough,
      detaildes:
        'Protein Bars',
      detailsImage: whitechoccookiedough,
      Weight_gram: '55g',
      Packing_Case: '15',
      Category: 'Fulfill Bar',
    },
    {
      title: 'Fulfill Bar (chocolate salted caramel)',
      description: 'Protein Bars',
      image: chocolatesaltedcaramel,
      detaildes:
        'Protein Bars',
      detailsImage: chocolatesaltedcaramel,
      Weight_gram: '55g',
      Packing_Case: '15',
      Category: 'Fulfill Bar',
    },
  ];

  const categories = ['All', ...new Set(cards.map(item => item.Category))];
  const filteredBars = category === 'All' ? cards : cards.filter(item => item.Category === category);

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

        {filteredBars.map((card, index) => (
          <Card
            key={index}
            className=" All_shop_card_class"
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => handleShow(card)}
          >
            <div className="card-content">
              <div className="image_bars">
                <Image src={card.image} alt={card.title} className="Yalla_product_images" />
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

export default YallaShopBar;
