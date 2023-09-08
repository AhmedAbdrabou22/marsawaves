import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap'
import Common from '../utility/Common'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from '../../redux/actions/GetAllProducts';
import imageData from '../../images/city-tour.webp'
const Tours = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    const products = useSelector(state => state.getAllProducts.products)



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 3, // Number of slides to scroll at a time
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
                dots: true,
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if(products){
        console.log(products.data);
    }




    return (
        <div className='tours s' style={{ marginTop: "180px" }}>
            <Common title="OUR POPULAR TOURS" desc="Our" insideDesc="Tours" />
            <div className='cityTours mt-5 py-4'>
                <Container>
                    <Slider {...settings}>
                        {
                            products && products.data ? (
                                products.data.map((item) => {
                                    return (
                                        <div className='productOne'>
                                            <div className='details'>
                                                <h2>{item.title}</h2>
                                                <p>{item.city}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </Slider>
                </Container>
            </div>
        </div>
    )
}

export default Tours
