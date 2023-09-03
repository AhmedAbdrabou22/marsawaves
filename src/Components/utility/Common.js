import React from 'react'

const Common = ({title , desc , insideDesc}) => {
    return (
        <div>
            <div>
                <p style={{ letterSpacing: "5px", fontSize: "25px", color: "#004796" }}>{title}</p>
                <h2 style={{ color: "#004796", fontSize: "40px", fontWeight: "bolder" }}>{desc} <span style={{ color: "#ff681a" }}>{insideDesc}</span></h2>
                <div className='path'>
                    <div className='circle'></div>
                </div>
            </div>
        </div>
    )
}

export default Common
