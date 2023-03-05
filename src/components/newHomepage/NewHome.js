
import React, { useEffect, useState } from 'react';
import {AbiImage} from './AbiImage';
import { Footer } from '../Footer';


import useAuth from "../hooks/useAuth";
import { Circle } from './Circle';
import { HomeTitle } from './HomeTitle';
import { Description } from './Description';

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
    <div>
    <div style={{display:'flex', flexDirection: 'column', height:imageHeight}}>
    <Circle/>
    <HomeTitle/>
    <Description style={{position:'absolute'}}/>
     <AbiImage/>
    </div>
    <Footer/>
    </div>
  );
}