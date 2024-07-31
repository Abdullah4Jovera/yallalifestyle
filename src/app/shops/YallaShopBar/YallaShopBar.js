'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import AOS from 'aos';
import barsone from '../../Assets/HomePageAssets/shopsAssets/barsone.png';
import barstwo from '../../Assets/HomePageAssets/shopsAssets/barstwo.png';
import barsthree from '../../Assets/HomePageAssets/shopsAssets/barsthree.png';
import barsfour from '../../Assets/HomePageAssets/shopsAssets/barsfour.png';
import barsfive from '../../Assets/HomePageAssets/shopsAssets/barsfive.png';
import barssix from '../../Assets/HomePageAssets/shopsAssets/barssix.png';
import barsseven from '../../Assets/HomePageAssets/shopsAssets/barsseven.png';
import barseight from '../../Assets/HomePageAssets/shopsAssets/barseight.png';
import barnine from '../../Assets/HomePageAssets/shopsAssets/barnine.png';
import barten from '../../Assets/HomePageAssets/shopsAssets/barten.png';
import bareleven from '../../Assets/HomePageAssets/shopsAssets/bareleven.png';
import bartwelve from '../../Assets/HomePageAssets/shopsAssets/bartwelve.png';
import bartirteen from '../../Assets/HomePageAssets/shopsAssets/bartirteen.png';
import barfourteen from '../../Assets/HomePageAssets/shopsAssets/barfourteen.png';
import barfifteen from '../../Assets/HomePageAssets/shopsAssets/barfifteen.png';
import bars from '../../Assets/HomePageAssets/shopsAssets/bars.png';
import detailsImageBar from '../../Assets/HomePageAssets/shopsAssets/detailsImageBar.png';
import barstwodetails from '../../Assets/HomePageAssets/shopsAssets/barstwodetails.png';
import barsfivedetails from '../../Assets/HomePageAssets/shopsAssets/barsfivedetails.png';
import barsfourdetails from '../../Assets/HomePageAssets/shopsAssets/barsfourdetails.png';
import barssixdetails from '../../Assets/HomePageAssets/shopsAssets/barssixdetails.png';
import barssevendetails from '../../Assets/HomePageAssets/shopsAssets/barssevendetails.png';
import barelevendetals from '../../Assets/HomePageAssets/shopsAssets/barelevendetals.png'
import bartwelvedetails from '../../Assets/HomePageAssets/shopsAssets/bartwelvedetails.png'
import bartenbartendetails from '../../Assets/HomePageAssets/shopsAssets/bartenbartendetails.png'
import barninedetails from '../../Assets/HomePageAssets/shopsAssets/barninedetails.png'
import bartirteendetails from '../../Assets/HomePageAssets/shopsAssets/bartirteendetails.png'
import barfourteendetails from '../../Assets/HomePageAssets/shopsAssets/barfourteendetails.png'
import barfifteendetails from '../../Assets/HomePageAssets/shopsAssets/barfifteendetails.png'
import barssisteendetails from '../../Assets/HomePageAssets/shopsAssets/barssisteendetails.png'
import '../shopStyle.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Popup from 'reactjs-popup';
import '../shopButton.css';
import 'reactjs-popup/dist/index.css';
import { ImCross } from "react-icons/im";

const YallaShopBar = () => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClose = () => setShow(false);

  function handleShow(product) {
    setSelectedProduct(product);
    setShow(true);
  }

  const cards = [
    {
      title: 'TOSI ALMOND SUPER BITES',
      description: 'A high energy snack bar',
      image: barsone,
      detaildes:
        'That is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax',
      detailsImage: detailsImageBar,
    },
    {
      title: 'TOSI CASHEW SUPER BITES',
      description: 'A high energy snack bar',
      image: barstwo,
      detaildes:
        'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barstwodetails,
    },
    {
      title: 'TOSI CAPPUCCINO ALMOND',
      description: 'A high energy snack bar',
      image: barsfive,
      detaildes:
        'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barsfivedetails,
    },
    {
      title: 'BE-KIND ALMOND & COCONUT',
      description: 'A high energy snack bar',
      image: barsfour,
      detaildes:
        'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barssevendetails,
    },
    {
      title: 'BE-KIND DARK CHOCOLATE NUTS',
      description: 'A high energy snack bar',
      image: barsthree,
      detaildes:
        'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barsfourdetails,
    },
    {
      title: 'BE-KIND NUT DELIGHT',
      description: 'A high energy snack bar',
      image: barssix,
      detaildes:
        'A high energy snack bar that is an excellent source of protein, omega 3s and fiber. Contains chia seeds and flax seeds',
      detailsImage: barssixdetails,
    },
    {
      title: 'Nestle Fitness strawberry',
      description: 'A high energy snack bar',
      image: barsseven,
    },
    {
      title: 'Nestle Fitness Chocolate',
      description: 'A high energy snack bar',
      image: barseight,
    },
    {
      title: 'Barebells BIRTHDAY CAKE',
      description: 'A high energy snack bar',
      image: barnine,
      detaildes:
        'Barebells Birthday Cake offers the classic sponge cake, colorful sprinkles, and buttercream flavor of your favorite birthday cake, all covered in silky white chocolate to give you the perfect snack.',
      detailsImage: barninedetails,
    },
    {
      title: 'Barebells cookies & CARAMEL',
      description: 'A high energy snack bar',
      image: barten,
      detaildes:
        'Barebells Cookies and Caramel features a cookie and chocolate-flavored center and a slightly salted layer of caramel, all deliciously coated with silky milk chocolate and topped with crisps.',
      detailsImage: bartenbartendetails,
    },
    {
      title: 'Barebells cookies & CARAMEL',
      description: 'A high energy snack bar',
      image: bareleven,
      detaildes:
        'Smooth milk chocolate laced with crunchy, golden peanuts – a match made in heaven!',
      detailsImage: barelevendetals,
    },
    {
      title: 'Barebells CARAMEL CHOCO',
      description: 'A high energy snack bar',
      image: bartwelve,
      detaildes:
        'Super soft and fluffy chocolate core, topped with sweet caramel layer and silky soft chocolate shell. Our soft protein bars have 16 grams of protein and no added sugar*.',
      detailsImage: bartwelvedetails,
    },
    {
      title: 'Barebells cookies & cream',
      description: 'A high energy snack bar',
      image: bartirteen,
      detaildes:
        'Soft and creamy cookie-dough core covered in sweet milk chocolate and crunchy cookie crispies.',
      detailsImage: bartirteendetails,
    },
    {
      title: 'Quest dipped chocolate peanut butter',
      description: 'A high energy snack bar',
      image: barfourteen,
      detaildes:
        'Enjoy the deliciously satisfying taste of peanut butter protein bar dipped and drizzled with a sweet chocolatey coating.',
      detailsImage: barfourteendetails,
    },
    {
      title: 'Quest dipped cookies & cream',
      description: 'A high energy snack bar',
      image: barfifteen,
      detaildes:
        'Enjoy the delicious taste of classic cookies & cream protein bar dipped and drizzled with a sweet chocolatey coating.',
      detailsImage: barfifteendetails,
    },
    {
      title: 'Quest WHITE CHOCOLATE RASPBERRY',
      description: 'A high energy snack bar',
      image: bars,
      detaildes:
        'Indulge your taste buds with the White Chocolate Raspberry Quest Bar. The sweet and tart flavor of white chocolate and real dried raspberries',
      detailsImage: barssisteendetails,
    },
  ];

  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return cards
      .filter((product) => product.category === selectedProduct.category)
      .slice(0, 3);
  }, [selectedProduct]);

  return (
    <div className="shop-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="mt-3 All_shop_card_class"
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

      {selectedProduct && (
        <Popup open={show} closeOnDocumentClick onClose={handleClose} >
          <div className="modal-content">

            <div className='close_btn' >
              <ImCross onClick={handleClose} style={{ cursor: 'pointer', color:'red' }} />
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

export default YallaShopBar;
