'use client'
import React, { useState, useEffect } from 'react';
import { Card, Table, Modal } from 'react-bootstrap';

import quinoasundriedtomatostd from '../Assets/Yallachips/quinoasundriedtomatostd.png'
import quinoasourcreamchive from '../Assets/Yallachips/quinoasourcreamchive.png'
import quinoachillifreshlime from '../Assets/Yallachips/quinoachillifreshlime.png'
import lentilchipscreamydil from '../Assets/Yallachips/lentilchipscreamydil.png'
import lentilchipschillilemon from '../Assets/Yallachips/lentilchipschillilemon.png'
import hummuschipsseasalt from '../Assets/Yallachips/hummuschipsseasalt.png'
import hummuschipschillilemon from '../Assets/Yallachips/hummuschipschillilemon.png'
import cheese from '../Assets/Yallachips/cheese.png'
import pepper from '../Assets/Yallachips/pepper.png'
import tomatoket from '../Assets/Yallachips/tomatoket.png'
import normalchilli from '../Assets/Yallachips/normalchilli.png'
import normalketchup from '../Assets/Yallachips/normalketchup.png'
import normalsaltvinegar from '../Assets/Yallachips/normalsaltvinegar.png'
import normalcheese from '../Assets/Yallachips/normalcheese.png'
import normalsalt from '../Assets/Yallachips/normalsalt.png'
import Doritonachocheese from '../Assets/Yallachips/Doritonachocheese.png'
import Doritosweetchilli from '../Assets/Yallachips/Doritosweetchilli.png'
import Sunbitebitescheeseherbs from '../Assets/Yallachips/Sunbitebitescheeseherbs.png'
import Sunbiteoliveoregano from '../Assets/Yallachips/Sunbiteoliveoregano.png'
import RealCrispssweetchilli from '../Assets/Yallachips/RealCrispssweetchilli.png'
import RealCrispsstrongcheeseonion from '../Assets/Yallachips/RealCrispsstrongcheeseonion.png'
import RealCrispsjalapenopepper from '../Assets/Yallachips/RealCrispsjalapenopepper.png'
import RealCrispsseasalt from '../Assets/Yallachips/RealCrispsseasalt.png'
import RealCrispsseasaltmaltvinegar from '../Assets/Yallachips/RealCrispsseasaltmaltvinegar.png'
import BurstSweetChilli from '../Assets/Yallachips/BurstSweetChilli.png'
import BurstSeaSalt from '../Assets/Yallachips/BurstSeaSalt.png'
import BurstSaltBlackPepper from '../Assets/Yallachips/BurstSaltBlackPepper.png'
import BurstMatureChed from '../Assets/Yallachips/BurstMatureChed.png'
import Pringlesoriginal from '../Assets/Yallachips/Pringlesoriginal.png'
import Pringlessourcreamonion from '../Assets/Yallachips/Pringlessourcreamonion.png'
import Pringleshotspicy from '../Assets/Yallachips/Pringleshotspicy.png'
import Pringlessaltvinegar from '../Assets/Yallachips/Pringlessaltvinegar.png'
import Pringlesketchup from '../Assets/Yallachips/Pringlesketchup.png'

import RawNuts from '../Assets/YallaNuts/RawNuts.png'
import dryfruits from '../Assets/YallaNuts/dryfruits.png'
import cocktailnuts from '../Assets/YallaNuts/cocktailnuts.png'
import cashewnuts from '../Assets/YallaNuts/cashewnuts.png'

import boostone from '../Assets/YallaDrinksAssets/Boostdrinks/boostone.png';
import boosttwo from '../Assets/YallaDrinksAssets/Boostdrinks/boosttwo.png';
import boostthree from '../Assets/YallaDrinksAssets/Boostdrinks/boostthree.png';
import Antioxidant from '../Assets/YallaDrinksAssets/Vitamenwell/Antioxidant.png';
import Care from '../Assets/YallaDrinksAssets/Vitamenwell/Care.png';
import Hydrate from '../Assets/YallaDrinksAssets/Vitamenwell/Hydrate.png';
import Reload from '../Assets/YallaDrinksAssets/Vitamenwell/Reload.png';
import Upgrade from '../Assets/YallaDrinksAssets/Vitamenwell/Upgrade.png';
import strawberry from '../Assets/YallaDrinksAssets/proteins/strawberry.png';
import vanilla from '../Assets/YallaDrinksAssets/proteins/vanilla.png';
import choclate from '../Assets/YallaDrinksAssets/proteins/choclate.png';
import bluebolt from '../Assets/YallaDrinksAssets/energydrinks/bluebolt.png';
import grapes from '../Assets/YallaDrinksAssets/energydrinks/grapes.png';
import lemon from '../Assets/YallaDrinksAssets/energydrinks/lemon.png';
import orangechill from '../Assets/YallaDrinksAssets/energydrinks/orangechill.png';
import tropical from '../Assets/YallaDrinksAssets/energydrinks/tropical.png';
import Oronamin from '../Assets/YallaDrinksAssets/energydrinks/Oronamin.png'
import OronaminC from '../Assets/YallaDrinksAssets/energydrinks/OronaminC.png'

import acquapanna from '../Assets/YallaDrinksAssets/sparklingwater/acquapanna.png'
import alain from '../Assets/YallaDrinksAssets/sparklingwater/alain.png'
import fiji from '../Assets/YallaDrinksAssets/sparklingwater/fiji330ml.png'
import spmineralwater from '../Assets/YallaDrinksAssets/sparklingwater/spmineralwater.png'

import CocaCola from '../Assets/YallaDrinksAssets/redbulldrinks/CocaCola330ml.png'
import CokeLight from '../Assets/YallaDrinksAssets/redbulldrinks/CokeLight330ml.png'
import CokeZero from '../Assets/YallaDrinksAssets/redbulldrinks/CokeZero330ml.png'
import Rebdull from '../Assets/YallaDrinksAssets/redbulldrinks/Rebdull.png'
import RebdullRedEdition from '../Assets/YallaDrinksAssets/redbulldrinks/RebdullRedEdition.png'
import RebdullSugarFree from '../Assets/YallaDrinksAssets/redbulldrinks/RebdullSugarFree.png'
import RebdullYellowEdition from '../Assets/YallaDrinksAssets/redbulldrinks/RebdullYellowEdition.png'
import SchwGingerAle330ml from '../Assets/YallaDrinksAssets/redbulldrinks/SchwGingerAle330ml.png'
import Sprite330ml from '../Assets/YallaDrinksAssets/redbulldrinks/Sprite330ml.png'

import MountainSpring from '../Assets/springwaterdrink/MountainSpring.png'
import PocariSweat from '../Assets/springwaterdrink/PocariSweat.png'

import Pokkasports from '../Assets/Pokksdrinks/Pokkasports.png'
import Pokkalemonjuice from '../Assets/Pokksdrinks/Pokkalemonjuice.png'
import PokkaIceTeabottlepeach from '../Assets/Pokksdrinks/PokkaIceTeabottlepeach.png'
import PokkaIceTeabottlelemon from '../Assets/Pokksdrinks/PokkaIceTeabottlelemon.png'

import VimtoCan from '../Assets/juices/VimtoCan.png'
import puremangosteen from '../Assets/juices/puremangosteen.png'
import passionorange from '../Assets/juices/passionorange.png'
import mangolychee from '../Assets/juices/mangolychee.png'
import mangojuice from '../Assets/juices/mangojuice.png'
import VimtoPet from '../Assets/juices/VimtoPet.png'
import VitaCocoPurecoconutWater from '../Assets/juices/VitaCocoPurecoconutWater.png'
import JustPickedCocoWater from '../Assets/juices/JustPickedCocoWater.png'
import CelebeOrganicCocoWater from '../Assets/juices/CelebeOrganicCocoWater.png'

import RaspberryJam from '../Assets/YallaBars/RaspberryJam.png';
import PancakeCaramel from '../Assets/YallaBars/PancakeCaramel.png';
import ChocolateCream from '../Assets/YallaBars/ChocolateCream.png';
import RipVANLowSugarWafeldutchcaramelvanilla from '../Assets/YallaBars/RipVANLowSugarWafeldutchcaramelvanilla.png';
import RipVANLowSugarWafelsnickerdoodle from '../Assets/YallaBars/RipVANLowSugarWafelsnickerdoodle.png';
import RipVANLowSugarWafelhoneyoats from '../Assets/YallaBars/RipVANLowSugarWafelhoneyoats.png';
import RipVANWafelcookiescream from '../Assets/YallaBars/RipVANWafelcookies&cream.png';
import RipVANPROTENWafelcookiescream from '../Assets/YallaBars/RipVANPROTENWafelcookies&cream.png';
import RipVANPROTEINWafelsnickerdoodle from '../Assets/YallaBars/RipVANPROTEINWafelsnickerdoodle.png';
import RipVANPROTEINWafelhoneyoats from '../Assets/YallaBars/RipVANPROTEINWafelhoney&oats.png';
import WarriorCrunchsaltedcaramel from '../Assets/YallaBars/WarriorCrunchsaltedcaramel.png';
import WarriorCrunchraspberrylemoncheesecake from '../Assets/YallaBars/WarriorCrunchraspberrylemoncheesecake.png';
import WarriorCrunchmilkchocococonut from '../Assets/YallaBars/WarriorCrunchmilkchocococonut.png';
import WarriorCrunchkeylimepie from '../Assets/YallaBars/WarriorCrunchkeylimepie.png';
import WarriorCrunchdarkchocolatepeanut from '../Assets/YallaBars/WarriorCrunchdarkchocolatepeanut.png';
import WarriorCrunchchocolatechipcookie from '../Assets/YallaBars/WarriorCrunchchocolatechipcookie.png';
import Kitkat from '../Assets/YallaBars/Kitkat.png';
import MMChoco from '../Assets/YallaBars/MMChoco.png'
import MatesserChoco from '../Assets/YallaBars/MatesserChoco.png'
import TwixMultipackChocoBig from '../Assets/YallaBars/TwixMultipackChocoBig.png'
import KinderBueno from '../Assets/YallaBars/KinderBueno.png'
import SnickersChocoBig from '../Assets/YallaBars/SnickersChocoBig.png'

import chocolatebrownie from '../Assets/YallaBars/chocolatebrownie.png'
import chocolatepeanutbutter from '../Assets/YallaBars/chocolatepeanutbutter.png'
import chocochipcookiedough from '../Assets/YallaBars/chocochipcookiedough.png'
import cookiescream from '../Assets/YallaBars/cookiescream.png'
import doublEchocochunk from '../Assets/YallaBars/doublEchocochunk.png'

import chocolatebrownieflavour from '../Assets/YallaBars/chocolatebrownieflavour.png'
import chocolatehazelnutwhip from '../Assets/YallaBars/chocolatehazelnutwhip.png'
import peanutcaramel from '../Assets/YallaBars/peanutcaramel.png'
import chocolatechoccaramelcookiedough from '../Assets/YallaBars/chocolatechoccaramelcookiedough.png'
import whitechoccookiedough from '../Assets/YallaBars/whitechoccookiedough.png'
import chocolatesaltedcaramel from '../Assets/YallaBars/chocolatesaltedcaramel.png'

import AOS from 'aos';
import Image from 'next/image';
import './shopStyle.css';
import './shopButton.css';
import 'reactjs-popup/dist/index.css';

const cards = [
  {
    title: 'EAT REAL CHIPS (quinoa sundried tomato & rstd)',
    description: 'Gluten Free',
    image: quinoasundriedtomatostd,
    detaildes: "Gluten Free",
    detailsImage: quinoasundriedtomatostd,
    Weight_gram: '30g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },
  {
    title: 'EAT REAL CHIPS (quinoa sour cream & chive)',
    description: 'Gluten Free',
    image: quinoasourcreamchive,
    detaildes: "Gluten Free",
    detailsImage: quinoasourcreamchive,
    Weight_gram: '30g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },
  {
    title: 'EAT REAL CHIPS (quinoa chilli & fresh lime)',
    description: 'Gluten Free',
    image: quinoachillifreshlime,
    detaildes: "Gluten Free",
    detailsImage: quinoachillifreshlime,
    Weight_gram: '30g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },
  {
    title: 'EAT REAL CHIPS (lentil chips creamy dil)',
    description: 'Gluten Free',
    image: lentilchipscreamydil,
    detaildes: "Gluten Free",
    detailsImage: lentilchipscreamydil,
    Weight_gram: '40g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },

  {
    title: 'EAT REAL CHIPS (hummus chips chilli & lemon)',
    description: 'Gluten Free',
    image: lentilchipschillilemon,
    detaildes: "Gluten Free",
    detailsImage: lentilchipschillilemon,
    Weight_gram: '45g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },

  {
    title: 'EAT REAL CHIPS (hummus chips sea salt)',
    description: 'Gluten Free',
    image: hummuschipsseasalt,
    detaildes: "Gluten Free",
    detailsImage: hummuschipsseasalt,
    Weight_gram: '45g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },

  {
    title: 'EAT REAL CHIPS (hummus chips chilli& lemon)',
    description: 'Gluten Free',
    image: hummuschipschillilemon,
    detaildes: "Gluten Free",
    detailsImage: hummuschipschillilemon,
    Weight_gram: '45g',
    Packing_Case: '12',
    Category: 'VEGAN CHIPS',
  },

  {
    title: 'LAYS FORNO (cheese)',
    description: 'FORNO CHIPS',
    image: cheese,
    detaildes: "FORNO CHIPS",
    detailsImage: cheese,
    Weight_gram: '43g',
    Packing_Case: '21',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS FORNO (pepper)',
    description: 'FORNO (pepper)',
    image: pepper,
    detaildes: "FORNO (pepper)",
    detailsImage: pepper,
    Weight_gram: '43g',
    Packing_Case: '21',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS FORNO (tomato ket)',
    description: 'FORNO (tomato ket)',
    image: tomatoket,
    detaildes: "FORNO (tomato ket)",
    detailsImage: tomatoket,
    Weight_gram: '40g',
    Packing_Case: '21',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS NORMAL (chilli)',
    description: 'NORMAL (chilli)',
    image: normalchilli,
    detaildes: "NORMAL (chilli)",
    detailsImage: normalchilli,
    Weight_gram: '40g',
    Packing_Case: '50',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS NORMAL (ketchup)',
    description: 'NORMAL (ketchup)',
    image: normalketchup,
    detaildes: "NORMAL (ketchup)",
    detailsImage: normalketchup,
    Weight_gram: '40g',
    Packing_Case: '50',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS NORMAL (salt & vinegar)',
    description: 'NORMAL (salt & vinegar)',
    image: normalsaltvinegar,
    detaildes: "NORMAL (salt & vinegar)",
    detailsImage: normalsaltvinegar,
    Weight_gram: '40g',
    Packing_Case: '50',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS NORMAL (cheese)',
    description: 'NORMAL (cheese)',
    image: normalcheese,
    detaildes: "NORMAL (cheese)",
    detailsImage: normalcheese,
    Weight_gram: '40g',
    Packing_Case: '50',
    Category: 'BAKED CHIPS',
  },
  {
    title: 'LAYS NORMAL (Salt)',
    description: 'NORMAL (Salt)',
    image: normalsalt,
    detaildes: "NORMAL (Salt)",
    detailsImage: normalsalt,
    Weight_gram: '40g',
    Packing_Case: '50',
    Category: 'BAKED CHIPS',
  },

  {
    title: 'Doritos (nacho cheese)',
    description: 'HANDCOOKED CRISPS',
    image: Doritonachocheese,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: Doritonachocheese,
    Weight_gram: '48g',
    Packing_Case: '20',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Doritos (sweet chilli)',
    description: 'HANDCOOKED CRISPS',
    image: Doritosweetchilli,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: Doritosweetchilli,
    Weight_gram: '48g',
    Packing_Case: '20',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Sunbitebread bites (cheese & herbs)',
    description: 'HANDCOOKED CRISPS',
    image: Sunbitebitescheeseherbs,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: Sunbitebitescheeseherbs,
    Weight_gram: '50g',
    Packing_Case: '20',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Sunbitebread bites (olive & oregano)',
    description: 'HANDCOOKED CRISPS',
    image: Sunbiteoliveoregano,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: Sunbiteoliveoregano,
    Weight_gram: '50g',
    Packing_Case: '20',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Real Crisps (sweet chilli)',
    description: 'HANDCOOKED CRISPS',
    image: RealCrispssweetchilli,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: RealCrispssweetchilli,
    Weight_gram: '35g',
    Packing_Case: '24',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Real Crisps (strong cheese & onion)',
    description: 'HANDCOOKED CRISPS',
    image: RealCrispsstrongcheeseonion,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: RealCrispsstrongcheeseonion,
    Weight_gram: '35g',
    Packing_Case: '24',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Real Crisps (jalapeno pepper)',
    description: 'HANDCOOKED CRISPS',
    image: RealCrispsjalapenopepper,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: RealCrispsjalapenopepper,
    Weight_gram: '35g',
    Packing_Case: '24',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Real Crisps ( sea salt)',
    description: 'HANDCOOKED CRISPS',
    image: RealCrispsseasalt,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: RealCrispsseasalt,
    Weight_gram: '35g',
    Packing_Case: '24',
    Category: 'BREAD CHIPS',
  },
  {
    title: 'Real Crisps ( sea salt & malt vinegar)',
    description: 'HANDCOOKED CRISPS',
    image: RealCrispsseasaltmaltvinegar,
    detaildes: "HANDCOOKED CRISPS",
    detailsImage: RealCrispsseasaltmaltvinegar,
    Weight_gram: '35g',
    Packing_Case: '24',
    Category: 'BREAD CHIPS',
  },

  {
    title: 'Burst Crisps Sweet Chilli',
    description: 'Burst Crisps',
    image: BurstSweetChilli,
    detaildes: "Burst Crisps",
    detailsImage: BurstSweetChilli,
    Weight_gram: '40g',
    Packing_Case: '20',
    Category: 'HANDCOOKED CHIPS',
  },
  {
    title: 'Burst Crisps Sea Salt',
    description: 'Burst Crisps',
    image: BurstSeaSalt,
    detaildes: "Burst Crisps",
    detailsImage: BurstSeaSalt,
    Weight_gram: '40g',
    Packing_Case: '20',
    Category: 'HANDCOOKED CHIPS',
  },

  {
    title: 'Burst Crisps Salt & Black Pepper',
    description: 'Burst Crisps',
    image: BurstSaltBlackPepper,
    detaildes: "Burst Crisps",
    detailsImage: BurstSaltBlackPepper,
    Weight_gram: '40g',
    Packing_Case: '20',
    Category: 'HANDCOOKED CHIPS',
  },

  {
    title: 'Burst Crisps Mature Ched',
    description: 'Burst Crisps',
    image: BurstMatureChed,
    detaildes: "Burst Crisps",
    detailsImage: BurstMatureChed,
    Weight_gram: '40g',
    Packing_Case: '20',
    Category: 'HANDCOOKED CHIPS',
  },


  {
    title: 'Pringles Chips (original)',
    description: 'Pringles Chips',
    image: Pringlesoriginal,
    detaildes: "Pringles Chips",
    detailsImage: Pringlesoriginal,
    Weight_gram: '40g',
    Packing_Case: '12',
    Category: 'STIX CHIPS',
  },

  {
    title: 'Pringles Chips (sour cream onion)',
    description: 'Pringles Chips',
    image: Pringlessourcreamonion,
    detaildes: "Pringles Chips",
    detailsImage: Pringlessourcreamonion,
    Weight_gram: '40g',
    Packing_Case: '12',
    Category: 'STIX CHIPS',
  },

  {
    title: 'Pringles Chips (hot & spicy)',
    description: 'Pringles Chips',
    image: Pringleshotspicy,
    detaildes: "Pringles Chips",
    detailsImage: Pringleshotspicy,
    Weight_gram: '40g',
    Packing_Case: '12',
    Category: 'STIX CHIPS',
  },

  {
    title: 'Pringles Chips (salt & vinegar)',
    description: 'Pringles Chips',
    image: Pringlessaltvinegar,
    detaildes: "Pringles Chips",
    detailsImage: Pringlessaltvinegar,
    Weight_gram: '40g',
    Packing_Case: '12',
    Category: 'STIX CHIPS',
  },

  {
    title: 'Pringles Chips (ketchup)',
    description: 'Pringles Chips',
    image: Pringlesketchup,
    detaildes: "Pringles Chips",
    detailsImage: Pringlesketchup,
    Weight_gram: '40g',
    Packing_Case: '12',
    Category: 'STIX CHIPS',
  },
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
  {
    title: 'Boost Sport Isotonic Mixed Berry',
    description: 'Boost Sports Drinks',
    image: boostone,
    detaildes: "Boost Sport Isotonic Mixed Berry",
    detailsImage: boostone,
    Weight_gram: '500ml',
    Packing_Case: '12',
    Category: 'BOOST SPORT ISOTONIC',
  },
  {
    title: 'Boost Sport Isotonic Orange',
    description: 'Boost Sports Drinks',
    image: boostthree,
    detaildes: "Boost Sport Isotonic Mixed Berry",
    detailsImage: boostthree,
    Weight_gram: '500ml',
    Packing_Case: '12',
    Category: 'BOOST SPORT ISOTONIC',
  },
  {
    title: 'Boost Sport Isotonic Topical Berry',
    description: 'Boost Sports Drinks',
    image: boosttwo,
    detaildes: 'Boost Sport Isotonic Topical Berry',
    detailsImage: boosttwo,
    Weight_gram: '500ml',
    Packing_Case: '12',
    Category: 'BOOST SPORT ISOTONIC',
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
    Category: 'SPARKLING / NORMAL WATER',
  },
  {
    title: 'Al Ain Water',
    description: 'Al Ain Water',
    image: alain,
    detaildes: 'Gatorade',
    detailsImage: alain,
    Weight_gram: '500ml',
    Packing_Case: '24',
    Category: 'SPARKLING / NORMAL WATER',
  },
  {
    title: 'Fiji Water 330ml (AR / EN )',
    description: 'FiJi Water',
    image: fiji,
    detaildes: 'FiJi Water',
    detailsImage: fiji,
    Weight_gram: '330ml',
    Packing_Case: '36',
    Category: 'SPARKLING / NORMAL WATER',
  },
  {
    title: 'Fiji Water 500ml (AR / EN )',
    description: 'FiJi Water',
    image: fiji,
    detaildes: 'FiJi Water',
    detailsImage: fiji,
    Weight_gram: '500ml',
    Packing_Case: '24',
    Category: 'SPARKLING / NORMAL WATER',
  },
  {
    title: 'SP Mineral Water 500ml',
    description: 'SP Water',
    image: spmineralwater,
    detaildes: 'SP Water',
    detailsImage: spmineralwater,
    Weight_gram: '500ml',
    Packing_Case: '4x6',
    Category: 'SPARKLING / NORMAL WATER',
  },
  {
    title: 'SP Mineral Water 250ml',
    description: 'SP Water',
    image: spmineralwater,
    detaildes: 'SP Water',
    detailsImage: spmineralwater,
    Weight_gram: '250ml',
    Packing_Case: '4x6',
    Category: 'SPARKLING / NORMAL WATER',
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
    Category: 'SPRING WATER / ELECTROLYTES',
  },
  {
    title: 'Mountain Spring Water',
    description: 'Alkaline',
    image: MountainSpring,
    detaildes: 'Alkaline',
    detailsImage: MountainSpring,
    Weight_gram: '500ml',
    Packing_Case: '12',
    Category: 'SPRING WATER / ELECTROLYTES',
  },
  {
    title: 'Pokka Sports water',
    description: 'Pokka Sports water',
    image: Pokkasports,
    detaildes: 'Pokka Sports water',
    detailsImage: Pokkasports,
    Weight_gram: '500ml',
    Packing_Case: '24',
    Category: 'POKKA SPORTS DRINKS',
  },
  {
    title: 'Pokka Ice Tea bottle-lemon',
    description: 'Pokka Ice Tea bottle-lemon',
    image: PokkaIceTeabottlelemon,
    detaildes: 'Pokka Ice Tea bottle-lemon',
    detailsImage: PokkaIceTeabottlelemon,
    Weight_gram: '500ml',
    Packing_Case: '24',
    Category: 'POKKA SPORTS DRINKS',
  },
  {
    title: 'Pokka Ice Tea bottle -peach',
    description: 'Pokka Ice Tea bottle -peach',
    image: PokkaIceTeabottlepeach,
    detaildes: 'Pokka Ice Tea bottle -peach',
    detailsImage: PokkaIceTeabottlepeach,
    Weight_gram: '500ml',
    Packing_Case: '24',
    Category: 'POKKA SPORTS DRINKS',
  },
  {
    title: 'PokkaLife Plus -lemon juice',
    description: 'PokkaLife Plus -lemon juice',
    image: Pokkalemonjuice,
    detaildes: 'PokkaLife Plus -lemon juice',
    detailsImage: Pokkalemonjuice,
    Weight_gram: '500ml',
    Packing_Case: '24',
    Category: 'POKKA SPORTS DRINKS',
  },
  {
    title: 'Vimto Can',
    description: 'Vimto Can',
    image: VimtoCan,
    detaildes: 'Vimto Can',
    detailsImage: VimtoCan,
    Weight_gram: '250ml',
    Packing_Case: '30',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Lily Fresh 100% (pure mangosteen)',
    description: 'Pure Mangosteen',
    image: puremangosteen,
    detaildes: 'Pure Mangosteen',
    detailsImage: puremangosteen,
    Weight_gram: '180ml',
    Packing_Case: '24',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Lily Fresh 100% (passion orange)',
    description: 'Passion Orange',
    image: passionorange,
    detaildes: 'Passion Orange',
    detailsImage: passionorange,
    Weight_gram: '180ml',
    Packing_Case: '24',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Lily Fresh 100% (mango lychee)',
    description: 'Mango Lychee',
    image: mangolychee,
    detaildes: 'Mango Lychee',
    detailsImage: mangolychee,
    Weight_gram: '180ml',
    Packing_Case: '24',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Lily Fresh 100% (Mango Juice)',
    description: 'Mango Juice',
    image: mangojuice,
    detaildes: 'Mango Juice',
    detailsImage: mangojuice,
    Weight_gram: '180ml',
    Packing_Case: '24',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Vimto Pet',
    description: 'Vimto Pet',
    image: VimtoPet,
    detaildes: 'Vimto Pet',
    detailsImage: VimtoPet,
    Weight_gram: '250ml',
    Packing_Case: '24',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Vita Coco Pure coconut Water',
    description: 'Vita Coco Pure coconut Water',
    image: VitaCocoPurecoconutWater,
    detaildes: 'Vita Coco Pure coconut Water',
    detailsImage: VitaCocoPurecoconutWater,
    Weight_gram: '330ml',
    Packing_Case: '12',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Celebes Organic Coco Water',
    description: 'Celebes Organic Coco Water',
    image: CelebeOrganicCocoWater,
    detaildes: 'Celebes Organic Coco Water',
    detailsImage: CelebeOrganicCocoWater,
    Weight_gram: '330ml',
    Packing_Case: '12',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Just Picked Coco Water',
    description: 'Just Picked Coco Water',
    image: JustPickedCocoWater,
    detaildes: 'Just Picked Coco Water',
    detailsImage: JustPickedCocoWater,
    Weight_gram: '330ml',
    Packing_Case: '12',
    Category: 'COCONUT WATER & JUICES',
  },
  {
    title: 'Snaq Fabriq Pancake Raspberry Jam',
    description: 'Snaq Fabriq Pancake',
    image: RaspberryJam,
    detaildes:
      'Snaq Fabriq Pancake',
    detailsImage: RaspberryJam,
    Weight_gram: '45g',
    Packing_Case: '10',
    Category: 'PROTEIN BAREBELLS',
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
    Category: 'PROTEIN BAREBELLS',
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
    Category: 'PROTEIN BAREBELLS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'RIP VAN WAFELS',
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
    Category: 'WARRIOR PROTEIN BARS',
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
    Category: 'WARRIOR PROTEIN BARS',
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
    Category: 'WARRIOR PROTEIN BARS',
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
    Category: 'WARRIOR PROTEIN BARS',
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
    Category: 'WARRIOR PROTEIN BARS',
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
    Category: 'WARRIOR PROTEIN BARS',
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
    Category: 'CHOCOLATES',
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
    Category: 'CHOCOLATES',
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
    Category: 'CHOCOLATES',
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
    Category: 'CHOCOLATES',
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
    Category: 'CHOCOLATES',
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
    Category: 'CHOCOLATES',
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
    Category: 'QUEST BAR',
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
    Category: 'QUEST BAR',
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
    Category: 'QUEST BAR',
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
    Category: 'QUEST BAR',
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
    Category: 'QUEST BAR',
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
    Category: 'FULFILL BAR',
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
    Category: 'FULFILL BAR',
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
    Category: 'FULFILL BAR',
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
    Category: 'FULFILL BAR',
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
    Category: 'FULFILL BAR',
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
    Category: 'FULFILL BAR',
  },
];

const YallaAllShopProduct = () => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shuffledCards, setShuffledCards] = useState(cards);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledCards(shuffleArray(cards));
    }, 3000);

    return () => clearInterval(interval);
  }, [cards]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };


  return (
    <div className="shop-container">
      {shuffledCards.map((card, index) => (
        <Card key={index} className="mt-3 All_shop_card_class card-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="card-content">
            <div className="image_bars">
              <Image src={card.image} alt={card.title} className="image_drink" />
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

export default YallaAllShopProduct;



