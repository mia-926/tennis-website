
import React, { useEffect, useState } from 'react';
import {AbiImage} from './AbiImage';
import { Footer } from '../Footer';
import { Testimonials } from './testimonials/Testimonial';

import useAuth from "../hooks/useAuth";
import { Circle } from './Circle';
import { HomeTitle } from './HomeTitle';
import { Description } from './Description';

export const NewHome = () => {
  const {setlastWindow} = useAuth()
  const{lastWindow} = useAuth();
  const {setAuth} = useAuth();
  const {auth} = useAuth()
  useEffect(() => {
    setlastWindow("/join-lesson")
    console.log(lastWindow)
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
    <div className='homeBody'>
    <div style={{display:'flex', flexDirection: 'column', height:imageHeight, background: '#D3D3D3'}}>
   
  
    <HomeTitle style={{zIndex:1}}/>
    <Circle  style={{zIndex:2, position:'relative'}}/>
    <Description style={{position:'absolute'}}/>
     <AbiImage/>
     <div>
        <Testimonials/>
    </div>

    </div>
    <div style={{marginTop:400}}>
    <Footer/>
    </div>
    </div>
  );
}