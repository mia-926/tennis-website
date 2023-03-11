
import React, { useEffect, useState } from 'react';
import {AbiImage} from './AbiImage';
import { Footer } from '../Footer';
import { Testimonials } from './testimonials/Testimonial';

import useAuth from "../hooks/useAuth";
import { Circle } from './Circle';
import { HomeTitle } from './HomeTitle';
import { Description } from './Description';
import {BottomCircle} from './BottomCircle';
import { Banner } from './Banner';

export const NewHome = () => {
  const {setAuth} = useAuth();
  const {auth} = useAuth()
  useEffect(() => {
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




  return (
    <div className='homeBody' style={{marginBottom:400}}>
      <Testimonials/>
    <div style={{display:'flex', flexDirection: 'column', height:imageHeight, background: '#D3D3D3'}}>
   

    <HomeTitle style={{zIndex:3}}/>
  
    <BottomCircle  style={{zIndex:1}}/>
    <Circle  style={{zIndex:4, position:'relative'}}/>
      <Banner/>
    <Description style={{position:'absolute'}}/>
     <AbiImage style={{zIndex:2}}/>

     {/* <div style={{position: 'absolute', top: 0, left: 0,  zIndex:1, borderRadius:"50%"}}>
        <Testimonials/>
    </div> */}

    </div>
    <div style={{marginTop:400}}>
    <Footer/>
    </div>
    </div>
  );
}

