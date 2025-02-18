import React from 'react'
import '../shopStyle.css'
import HomePageNav from '@/app/HomePageNav'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Form from 'react-bootstrap/Form';
import YallaFooter from '@/app/YallaFooter'
import yallaShop from '../../Assets/HomePageAssets/yallashop.png'
import viewproducts from '../../Assets/HomePageAssets/viewproducts.png'
import search_icon from '../../Assets/HomePageAssets/search_icon.png'
import chipsone from '../../Assets/HomePageAssets/shopsAssets/chipsone.png'
import Link from 'next/link'
import AllShops from '../YallaBar.js'
import YallaChipsShops from './YallaShopChips'
import YallaButton from '../YallaButton'
const Page = () => {
  return (
    <div>
      <HomePageNav />
      <Container fluid className='shopContainer'>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }} >
          <div className='yalla_shop_iamge' >
            <Image src={yallaShop} alt='yallaShop' />
          </div>
          <div className='mt-2' >
            <YallaButton />
          </div>
        </div>
        <YallaChipsShops />
      </Container>
      <YallaFooter />
    </div>
  )
}

export default Page