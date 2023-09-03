import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions/GetAllProducts';
import Common from '../utility/Common';
const Destnation = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])


    const products = useSelector(state => state.getAllProducts.products)

    if (products) {
        console.log(products.data);
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
    };

    return (
        <div style={{ marginTop: "120px" }} className='text-center' dir="rtl">
            <div className='redSea'>
                <Common title="DESTINATIONS" desc="Let's Discover Your" insideDesc = "DESTINATIONS"/>
                <div className='w-75 m-auto'>
                    <Slider {...settings}>
                        {
                            products && products.data ? (
                                products.data.map((item) => {
                                    return (
                                        <div className='containerData d-flex justify-content-between align-items-center'>
                                            <div>
                                                <img src={item.image} alt="data" style={{ width: "200px", height: "220px", borderRadius: "50%" }} />
                                            </div>
                                            <div className='description'>
                                                <p className='w-100 fs-2' style={{color:"#004796"}}>{item.title}</p>
                                                <p className='w-100'>{item.desc}</p></div>
                                        </div>
                                    )
                                })
                            ) : (<h1>لا يوجد رحلات</h1>)
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Destnation
