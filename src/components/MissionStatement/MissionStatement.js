
import React, { useEffect, useState } from 'react';
import { MyCarousel } from '../calendar/MyCarousel';
import { Footer } from '../Footer';

import { MyNavBar } from '../navBar/MyNavBar';
import { Background } from './Background';
import { Circles } from './Circles';
import { Text } from './Text';
import useAuth from "../hooks/useAuth";

export const MissionStatement = () => {
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

  const footer = () => {
    if(window.innerWidth > 990){
        return(true);
    }
    else{
        return(false);
    }
}

  const [showFooter, setShowFooter] = useState(() => footer());


  useEffect(() =>{
      const handleResize = () => {
          setShowFooter(footer());
      }
      window.addEventListener('resize', handleResize)

      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])

  if(showFooter){
  return (
    <div>
      <div>
      <Background/>
      </div>
      <div>
      <h2 style={{background: "#294539", margin:0, padding:0}}>
      </h2>
      </div>
    <Footer style={{ opacity:  0}}/>
    </div>
  );
  }
  else{
    return(
      <div>
      <div>
      <Background/>
      </div>
      <div>
      <h2 style={{background: "#294539", margin:0, padding:0}}>
      </h2>
      </div>
    </div>
    );
  }
}