import React, { useState, useEffect } from 'react';
import mission_image from '../../images/missionIMG.jpg';
import "./missiontext.css";


export const ryanImage = () => {
    const [imageWidth, setimageWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const handleResize = () => {setimageWidth(window.innerWidth);}
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



    return(
        <div style={{background:"darkGreen"}}>
            <img className = "ryanImage" style={{width:imageWidth}}src = {mission_image}></img>
        </div>
    )
}
