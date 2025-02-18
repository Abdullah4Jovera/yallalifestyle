import React from 'react'
import './Yallabuttonstyle.css'
import Link from 'next/link'
const YallaButton = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexWrap: 'wrap' }} className='mb-2' >
            <Link href={'/shops'} className="ios-button">
                All
            </Link>

            <Link href={'/shops/YallaShopBar'} className="ios-button">
                Bars
            </Link>

            <Link href={'/shops/YallaShopChips'} className="ios-button">
                Chips
            </Link>


            <Link href={'/shops/YallaShopNuts'} className="ios-button">
                Nuts
            </Link>


            <Link href={'/shops/YallaShopDrink'} className="ios-button">
                Drinks
            </Link>

        </div>)
}

export default YallaButton
