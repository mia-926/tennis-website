import React, { useState, useEffect } from 'react';
import homeImage from '../../images/uncroppedAbi.png';
import "./newHomepage.css";


export const AbiImage = () => {
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
            <img className = "abiImage" style={{width:imageWidth}}src = {homeImage}></img>
        </div>
    )
}
