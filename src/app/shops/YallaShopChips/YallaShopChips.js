'use client'
import React, { useState, useEffect, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import chipsone from '../../Assets/HomePageAssets/shopsAssets/chipsone.png';
import chipstwo from '../../Assets/HomePageAssets/shopsAssets/chipstwo.png';
import chipsthree from '../../Assets/HomePageAssets/shopsAssets/chipsthree.png';
import chipsfive from '../../Assets/HomePageAssets/shopsAssets/chipsfive.png'
import chipssix from '../../Assets/HomePageAssets/shopsAssets/chipssix.png'
import chipsfour from '../../Assets/HomePageAssets/shopsAssets/chipsfour.png'
import chipstwodetails from '../../Assets/HomePageAssets/shopsAssets/chipstwodetails.png'
import chipsdetailsOne from '../../Assets/HomePageAssets/shopsAssets/chipsdetailsOne.png'
import chipsthreedetails from '../../Assets/HomePageAssets/shopsAssets/chipsthreedetails.png'
import chipsfourdetails from '../../Assets/HomePageAssets/shopsAssets/chipsfourdetails.png'
import chipsfivedetails from '../../Assets/HomePageAssets/shopsAssets/chipsfivedetails.png'
import chipssixdetails from '../../Assets/HomePageAssets/shopsAssets/chipssixdetails.png'
import chipsseven from '../../Assets/HomePageAssets/shopsAssets/chipsseven.png'
import chipseight from '../../Assets/HomePageAssets/shopsAssets/chipseight.png'
import chipssevendetails from '../../Assets/HomePageAssets/shopsAssets/chipssevendetails.png'
import chipseightdetails from '../../Assets/HomePageAssets/shopsAssets/chipseightdetails.png'
import chipsnine from '../../Assets/HomePageAssets/shopsAssets/chipsnine.png'
import chipsten from '../../Assets/HomePageAssets/shopsAssets/chipsten.png'
import chipsninedetails from '../../Assets/HomePageAssets/shopsAssets/chipsninedetails.png'
import chipelevens from '../../Assets/HomePageAssets/shopsAssets/chipelevens.png'
import chipelevensdetails from '../../Assets/HomePageAssets/shopsAssets/chipelevensdetails.png'
import chiptwelve from '../../Assets/HomePageAssets/shopsAssets/chiptwelve.png'
import chiptwelvedetails from '../../Assets/HomePageAssets/shopsAssets/chiptwelvedetails.png'
import chiptwelve_onedetails from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_onedetails.png'
import chiptwelve_one from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_one.png'
import chiptwelve_two from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_two.png'
import chiptwelve_twodetails from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_twodetails.png'
import chiptwelve_three from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_three.png'
import chiptwelve_threedetails from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_threedetails.png'
import chiptwelve_four from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_four.png'
import chiptwelve_fourdetails from '../../Assets/HomePageAssets/shopsAssets/chiptwelve_fourdetails.png'
import AOS from 'aos';
import Image from 'next/image';
import '../shopStyle.css';
import { Button, Col, Row } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import Popup from 'reactjs-popup';
import '../shopButton.css';
import 'reactjs-popup/dist/index.css';
import { ImCross } from "react-icons/im";

const YallaChipsShops = () => {
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
      title: 'Walkers Ready Salted',
      description: 'Healthy Crispy Chips',
      image: chipsone,
      detaildes:
        'Produced in the UAE! Vegan friendly Gluten Free MSG Free No Artificial Colours No Artificial Flavours No Cholesterol No Preservatives No Trans Fat Non-GMO',
      detailsImage: chipstwodetails,

    },
    {
      title: 'Kitco Bites Cheese Balls',
      description: 'Healthy Crispy Chips',
      image: chipstwo,
      detaildes:
        'No artificial colors, baked not fried.',
      detailsImage: chipsdetailsOne,
    },
    {
      title: 'Walkers Cheese & Onion',
      description: 'Healthy Crispy Chips',
      image: chipsthree,
      detaildes:
        'Produced in the UAE! Vegan friendly Gluten Free MSG Free No Artificial Colours No Artificial Flavours No Cholesterol No Preservatives No Trans Fat Non-GMO',
      detailsImage: chipsthreedetails,
    },
    {
      title: 'Hunter Red Rice Bites',
      description: 'Healthy Crispy Chips',
      image: chipsfour,
      detaildes:
        'Produced in the UAE! Vegan friendly Gluten Free MSG Free No Artificial Colours No Artificial Flavours No Cholesterol No Preservatives No Trans Fat Non-GMO',
      detailsImage: chipsfourdetails,
    },
    {
      title: 'Hunter Black Rice Bites',
      description: 'Healthy Crispy Chips',
      image: chipsfive,
      detaildes:
        'Produced in the UAE! Vegan friendly Gluten Free MSG Free No Artificial Colours No Artificial Flavours No Cholesterol No Preservatives No Trans Fat Non-GMO',
      detailsImage: chipsfivedetails,
    },
    {
      title: 'Walkers Sour Cream & Chive',
      description: 'Healthy Crispy Chips',
      image: chipssix,
      detaildes:
        'Containing 70% less fat than potato crisps on average, these tasty crisps provide a great alternative to conventional snacks and come in a number of delicious flavors. No preservatives No artificial colors Suitable for Vegetarians No MSG',
      detailsImage: chipssixdetails,
    },
    {
      title: "Lay's Forno Black Pepper",
      description: 'Healthy Crispy Chips',
      image: chipsseven,
      detaildes:
        'Dried Potatoes corn starch vegetable oils sunflower and palmolein sugar WHEAT FLOUR emulsifier SOYA LECITHIN black pepper seasoning Salt lactose maltodextrin butter milk powder sugar black pepper powder flavor enhancers E621 E635 onion powder garlic powder acidity regulator anticaking agent natural color.',
      detailsImage: chipssevendetails,
    },
    {
      title: "Lay's Forno Authentic Cheese",
      description: 'Healthy Crispy Chips',
      image: chipseight,
      detaildes:
        'Dried Potatoes modified corn starch vegetable oils sunflower and palmolein sugar WHEAT FLOUR emulsifier SOYA LECITHIN authentic cheese seasoning onion powder whey powder salt wheat flour flavor enhancers E621 E635 sugar vegetable oil coconut palm acidity regulator anticaking agentcheese powder natural color.',
      detailsImage: chipseightdetails,
    },
    {
      title: 'Sunbites Cheese and Herbs',
      description: 'Healthy Crispy Chips',
      image: chipsnine,
      detaildes:
        'Sunbites Cheese and Herbs Bread Bites are a delicious and satisfying snack option. Made with real cheese and a blend of herbs, these bites are packed with flavour. They are the perfect size for snacking on the go or enjoying a midday treat.',
      detailsImage: chipseightdetails,
    },
    {
      title: 'Sunbites Olive And Oregano',
      description: 'Healthy Crispy Chips',
      image: chipsten,
      detaildes:
        'Sunbites Olive and Oregano Bread Bites are a delicious and healthy snack option. Made with whole grain oats and real olive and oregano flavour, these bread bites are packed with flavour and nutrition.',
      detailsImage: chipsninedetails,
    },
    {
      title: 'Doritos Nacho Cheese',
      description: 'Healthy Crispy Chips',
      image: chipelevens,
      detaildes:
        'Are you up for a challenge? Yes? Then, grab a bag of intense flavoured, extremely crunchy Doritos Nacho Cheese Tortilla Chips and get ready to make some unforgettable memories. Bring a BOLD change to your snacking experience. Serve Doritos Nacho Cheese Tortilla Chips at your family next get-together, or take it to a picnic with friends. Share your love of Doritos tortilla chips no matter what the occasion. Spark up every moment and live it to the MAX with Doritos!',
      detailsImage: chipelevensdetails,
    },
    {
      title: 'Doritos flamin hot',
      description: 'Healthy Crispy Chips',
      image: chiptwelve,
      detaildes:
        'Doritos Flaming Hot Nacho Flavoured Tortilla Chips are a spicy twist on the classic nacho cheese flavour. These crunchy tortilla chips are dusted with a fiery blend of spices that will leave your taste buds tingling. Perfect for those who love a bold and intense snacking experience, these chips pack a punch of heat that will keep you coming back for more.',
      detailsImage: chiptwelvedetails,
    },
    {
      title: 'Doritos Sweet Chili',
      description: 'Healthy Crispy Chips',
      image: chiptwelve_one,
      detaildes:
        'Are you up for a challenge? Yes? Then, grab a bag of intense flavoured, extremely crunchy Doritos Sweet Chili Tortilla Chips and get ready to make some unforgettable memories. Bring a BOLD change to your snacking experience. Serve Doritos Sweet Chili Tortilla Chips at your next family get-together, or take it to a picnic with friends. Share your love of Doritos tortilla chips no matter what the occasion. Spark up every moment and live it to the MAX with Doritos!',
      detailsImage: chiptwelve_onedetails,
    },
    {
      title: 'HOT & SPICY TORTILLA',
      description: 'Healthy Crispy Chips',
      image: chiptwelve_two,
      detaildes:
        'Quest™ Hot & Spicy Tortilla Style Protein Chips bring the heat you’re looking for, with a satisfying crunch, mouth-watering flavor, and 19g of protein. The big taste of athlete-worthy nutrition has never been hotter than the big heat of Quest Hot & Spicy Protein Chips.',
      detailsImage: chiptwelve_twodetails,
    },
    {
      title: 'CHILI LIME TORTILLA',
      description: 'Healthy Crispy Chips',
      image: chiptwelve_three,
      detaildes:
        'Want a tangy, spicy tortilla chip you can enjoy any time? Lucky you! We made Quest Chili Lime Tortilla Style Protein Chips to feed your flavor cravings! Keto-friendly.',
      detailsImage: chiptwelve_threedetails,
    },
    {
      title: 'CHILI LIME TORTILLA',
      description: 'Healthy Crispy Chips',
      image: chiptwelve_four,
      detaildes:
        'Want a cheesy, savory tortilla chip you can enjoy any time? Lucky you! We made Quest Nacho Cheese Tortilla Style Protein Chips to feed your flavor cravings. Keto-friendly.',
      detailsImage: chiptwelve_fourdetails,
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
}

export default YallaChipsShops;
