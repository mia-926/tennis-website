import React, { useState, useEffect } from 'react';
import "./homepage.css";
import backgroundPic from '../../images/backgroundImage.png';
import smallerPic from '../../images/1300image.png';

export const Background = () => {
    const [imageURL, setimageURL] = useState(window.innerWidth >= 1300 ? backgroundPic : smallerPic);
    const [imageHeight, setimageHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setimageHeight(window.innerHeight)

        if (window.innerWidth < 1300){
            setimageURL(smallerPic)
        }
        else{
            setimageURL(backgroundPic)
        }
    }
    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <img style={{height: imageHeight}} src = {imageURL} alt="background"/>
    );
}

