import React, { useState, useEffect } from 'react';
import "./homepage.css";
import backgroundPic from '../../images/croppedSerena.png';
import widePic from '../../images/wideView.png';
import { Circles } from './Circles';
import { Text } from './Text';

export const Background = () => {
    const position = () => {
        if(window.innerWidth > 990){
            return("right");
        }
        else{
            return("relative");
        }
    }
    const width = () => {
        if(window.innerWidth > 990){
            return("auto");
        }
        else{
            return(window.innerWidth);
        }
    }
    const height = () => {
        if(window.innerWidth > 990){
            return(window.innerHeight);
        }
        else{
            return('auto');
        }
    }

    const [imageURL, setimageURL] = useState(window.innerWidth >= 900 ? backgroundPic : widePic);
    const [imageHeight, setimageHeight] = useState(() => height());
    const [imageWidth, setimageWidth] = useState(() => width());
    const [imagePosition, setImagePosition] = useState(() => position());


    useEffect(() =>{
        const handleResize = () => {
            setImagePosition(position());
            if(position() === "right"){
                setimageHeight(window.innerHeight);
                setimageWidth('auto');
                setimageURL(backgroundPic);
            }
            else{
                setimageHeight('auto');
                setimageWidth(window.innerWidth);
                setimageURL(widePic);
            }
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(<div style={{height: imageHeight, background:"white"}}><div>
        <img style={{height: imageHeight, width:imageWidth, float: imagePosition}} src = {imageURL} alt="background"/>
        </div>
        <Circles/>
        <Text/>
        </div>
    );
}

