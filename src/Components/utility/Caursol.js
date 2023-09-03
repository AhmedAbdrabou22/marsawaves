import Carousel from 'react-bootstrap/Carousel';
import Image from '../../images/slid-1.webp'
import ImageTwo from '../../images/slid-4.webp'
import ImageThree from '../../images/slid-5.webp'
import { getAllGovernments } from '../../redux/actions/GetGovernemnts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import baseUrl from '../../Api/baseUrl';

function UncontrolledExample() {

    const [idGovern, setIdGovern] = useState(1)
    const [cityData, setCityData] = useState([])


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGovernments())
    }, [])
    const governments = useSelector(state => state.getAllGovernments.Governments)


    const selectGovern = (e) => {
        setIdGovern(e.target.value)
    }

    const fetchCity = async () => {
        let cities = await baseUrl.get(`/api/v1/cities/${idGovern}`)
        setCityData(cities)
    }

    useEffect(() => {
        fetchCity();
    }, [idGovern])



    return (
        <div style={{ position: "relative", height: "70vh" }}>
            <Carousel className='itemData'>
                <Carousel.Item>
                    <div>
                        <img src={Image} alt="data" className='w-100' style={{ height: "80vh" }} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img src={ImageTwo} alt="data" className='w-100' style={{ height: "80vh" }} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img src={ImageThree} alt="data" className='w-100' style={{ height: "80vh" }} />
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='text-center py-3 infoCaursol'>
                <h4 id="titleCaursol">WHERE YOU CAN LIVE THE UNFORGETTABLE ADVENTURE</h4>
                <p className='mt-4'>Are You Ready For Your Memorable Holiday</p>
            </div>

            <div className='city bg-light'>
                <p>Book Your Next adventure</p>
                <div className='detailsCity d-flex justify-content-around align-items-center'>
                    <select onChange={selectGovern}>
                        {
                            governments && governments.data ? (
                                governments.data.map((item) => {
                                    return (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    )
                                })
                            ) : null
                        }
                    </select>

                    <select>
                        {
                            cityData.data && cityData.data.data ? (
                                cityData.data.data.map((item)=>{
                                    return(
                                        <option value={item.id}>{item.name}</option>
                                    )
                                })
                            ) : null
                        }
                    </select>
                    <button className='btn'>Search</button>
                </div>
            </div>
        </div>
    );
}

export default UncontrolledExample;