
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
import useScroll from "../hooks/useScroll"

export const NewHome = () => {
  const {setlastWindow} = useAuth()
  const{lastWindow} = useAuth();
  const {setAuth} = useAuth();
  const {setScroll} = useScroll()
  const {auth} = useAuth()
  useEffect(() => {
    setlastWindow("/join-lesson")
    if(auth != undefined && !auth?.keepLogin){
        setAuth({})
    }
  }, []);

  const [showFooter, setShowFooter] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight === scrollHeight) {
        setShowFooter(true);
          } else {
            setShowFooter(false);
          }
        

        
        }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
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
    <div className='homeBody' style={{marginBottom:800, paddingBottom: showFooter ? 100 : 0}}>
      <div style = {{zIndex:1}}>
      <Testimonials/>
      </div>
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

    </div>
    <div style={{position: 'fixed', bottom: 0, width: '100%', opacity: showFooter ? 1 : 0, transition: 'opacity 0.3s ease'}}>
   
  <Footer />
</div>



    </div>
  );
}

