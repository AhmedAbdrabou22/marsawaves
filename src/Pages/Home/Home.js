import React from 'react'
import Caursol from '../../Components/utility/Caursol'
import Destnation from '../../Components/cards/Destnation'
import Tours from '../../Components/cards/Tours'
const Home = () => {
    return (
        <div className='text-center tours'>
            <Caursol/>
            <Destnation/>
            <Tours/>
        </div>
    )
}

export default Home
