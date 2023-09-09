import React from 'react'
import Common from '../utility/Common'
import { Row, Col, Container } from 'react-bootstrap'
import Discount from '../../images/discountLabel.png'
import Star from '../utility/Star'
import CardOne1 from '../../images/snorkeling_with_dolphins_marsaalam.jpg'
import CardOne2 from '../../images/cardOne2.jpg'
import CardOne3 from '../../images/cardOne3.jpg'
import Marsa from '../../images/86.jpg'
import Location from '../utility/Location'
import Discountnum from '../utility/discount'
const Offers = () => {
    return (
        <div className='offers'>
            <Common title="OFFERS" desc="Best Offers" insideDesc="for you" />
            <Container className='mt-5'>
                <Row>
                    <Col xl="6" lg="6" md="12" sm="12">
                        <div className='cardOne' style={{ textAlign: 'left' }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='discountLabel disImage'>
                                    <img src={Discount} alt="Discount" />
                                    <p>15% Off</p>
                                </div>
                                <div className='discountLabel'>
                                    <div className='d-flex'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center malem'>
                                <img src={CardOne1} alt="tours" />
                                <img src={CardOne2} alt="tours" />
                                <img src={CardOne3} alt="tours" />
                            </div>
                            <div className='mt-5 px-3'>
                                <h2>South Package</h2>
                                <p>Discover the underwater world of the Red Sea, Marsa Waves make it between your hand, you can get the chance to enjoy our 15 % OFF, If you are in any hotel in Marsa Alam, Port Ghalib or El-Quseir you can enjoy our offer, we Choose for you the best...</p>
                            </div>
                            <div className='d-flex justify-content-between px-3 align-items-center'>
                                <div className='d-flex align-items-between justify-content-center'>
                                    <Location />
                                    <span>Marsa Alam, El-Quseir, Port Ghalib</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Discountnum />
                                    <span>15%</span>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right'}}>
                                <button className='btn view' >View More</button>
                            </div>
                        </div>
                    </Col>
                    <Col xl="6" lg="6" md="12" sm="12">
                        <div className='cardOne' style={{ textAlign: "left" }}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='discountLabel disImage'>
                                    <img src={Discount} alt="Discount" />
                                    <p>15% Off</p>
                                </div>
                                <div className='discountLabel'>
                                    <div className='d-flex'>
                                        <Star />
                                        <Star />
                                        <Star />
                                        <Star />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-center malem'>
                                <img src={Marsa} alt="tours" />
                            </div>
                            <div className='mt-5 px-3'>
                                <h2>South Package</h2>
                                <p>Discover the underwater world of the Red Sea, Marsa Waves make it between your hand, you can get the chance to enjoy our 15 % OFF, If you are in any hotel in Marsa Alam, Port Ghalib or El-Quseir you can enjoy our offer, we Choose for you the best...</p>
                            </div>
                            <div className='d-flex justify-content-between px-3 align-items-center'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Location />
                                    <span>Hurghada</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <Discountnum />
                                    <span>25%</span>
                                </div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <button className='btn view' >View More</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Offers
