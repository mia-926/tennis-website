
import React, { useEffect, useState } from 'react';
import {AbiImage} from './IphoneAbiImage';
import { Footer } from '../../Footer';
import { Testimonials } from './testimonials/IphoneTestimonial';
import useAuth from "../../hooks/useAuth";
import { Circle } from './IphoneCircle';
import { HomeTitle } from './IphoneHomeTitle';
import { Description } from './IphoneDescription';
import {BottomCircle} from './IphoneBottomCircle';
import { IphoneBanner } from './IphoneBanner';
import { PhoneFooter } from './PhoneFooter';


export const IphoneHome = () => {
  const {setlastWindow} = useAuth()
  const{lastWindow} = useAuth();
  const {setAuth} = useAuth();

  const {auth} = useAuth()

  useEffect(() => {
    setlastWindow("/join-lesson")
    if(auth != undefined && !auth?.keepLogin){
        setAuth({})
    }
  }, []);
  const [imageHeight, setimageHeight] = useState(window.innerHeight);

  useEffect(() =>{
      const handleResize = () => {setimageHeight(window.innerHeight);}
      window.addEventListener('resize', handleResize)

      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])

  const [showFooter, setShowFooter] = useState(0);

  return (
    <div style={{background:"white"}}>
    <div className='homeBody' style={{marginBottom:800, paddingBottom: showFooter ? 100 : 0}}>
      <div style = {{zIndex:1}}>
      <Testimonials/>
      </div>
      <div style={{display:'flex', flexDirection: 'column', height:imageHeight, background: '#D3D3D3'}}>
   
    <HomeTitle style={{zIndex:3}}/>
  
    <BottomCircle  style={{zIndex:1}}/>
    <Circle  style={{zIndex:4, position:'relative'}}/>
      <IphoneBanner/>
    <Description style={{position:'absolute'}}/>
   

     {/* <div style={{position: 'absolute', top: 0, left: 0,  zIndex:1, borderRadius:"50%"}}>
        <Testimonials/>
    </div> */}

    </div>

    </div>




    </div>
  );
}

