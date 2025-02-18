import React from 'react'
import './shopStyle.css'
import HomePageNav from '@/app/HomePageNav'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import YallaFooter from '@/app/YallaFooter'
import yallaShop from '../Assets/HomePageAssets/yallashop.png'
import viewproducts from '../Assets/HomePageAssets/viewproducts.png'
import YallaAllShopProduct from './YallaAllShopProduct'
import YallaButton from './YallaButton'
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
                <YallaAllShopProduct />
            </Container>
            <YallaFooter />
        </div>
    )
}

export default Page