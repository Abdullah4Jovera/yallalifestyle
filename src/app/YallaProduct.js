import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';
const YallaProduct = () => {
    return (
        <>
            <Row className='mt-5' >
                <Col>
                    <div className='productImage' >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                            <h4 className='productTag' >PRODUCTS</h4>
                            <h2 className='yallaproduct'> <span className='yallatag' >Yalla</span>  PRODUCTS</h2>

                            <p style={{ fontWeight: '400' }} className='producttext' >
                                A wide variety of branded snack products that provide healthier alternatives to traditional snacks.
                            </p>
                        </div>
                    </div>
                    <div className='btnContainerprpduct' >
                        <Link href={'/products'} className='viewAllproducts' >View All Products</Link>
                        <Link href={'/shops'} className='viewAllproducts' >Shop Now</Link>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default YallaProduct



