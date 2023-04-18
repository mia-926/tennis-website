import React, { useState, useEffect } from 'react';
import "./missionStatement.css";
import backgroundPic from'../../images/rings.jpg';
import widePic from '../../images/rings.jpg';
import { Circles } from './Circles';
import { Text } from './Text';
import logo from '../../images/greenlogo.png';
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

    const size = () => {
        if(window.innerWidth < 700){
            return true;
        }
        return false;
    }
    const [iphoneSize, setIphoneSize] = useState(() => size())
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

    if(iphoneSize){
        return (
            <div style={{height: 600, background: "transparent"}}>
              <div>
   <div> <div className="white-rectangle"></div><div style={{height:100,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
                <h1 className='statementfonts railwayBold' style={{position: "absolute", fontSize: 40, backgroundColor: "transparent", color:"white", paddingTop:160,textAlign:"center", width:window.innerWidth}}>
                  OUR<br></br> MISSION
                </h1> <img style={{height: imageHeight, width: imageWidth, float: imagePosition}} src={imageURL} alt="background"/></div>:
    <img style={{height: imageHeight, width: imageWidth, float: imagePosition}} src={imageURL} alt="background"/>
               
              </div>
                <div style={{position:"absolute",top:100}}>
                <Text/>
                </div>
            </div>
          );
          
    }
    return (
        <div style={{height: imageHeight, background: "transparent"}}>
          <div>
            <img style={{height: imageHeight, width: imageWidth, float: imagePosition}} src={imageURL} alt="background"/>
           
          </div>
            <div>
              <Circles/>
              <Text/>
            </div>
        </div>
      );
      
}

