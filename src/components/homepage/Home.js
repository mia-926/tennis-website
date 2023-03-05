
import React, { useEffect } from 'react';
import { MyCarousel } from '../calendar/MyCarousel';
import { Footer } from '../Footer';

import { MyNavBar } from '../navBar/MyNavBar';
import { Background } from './Background';
import { Circles } from './Circles';
import { Text } from './Text';
import useAuth from "../hooks/useAuth";

export const Home = () => {
  const {setAuth} = useAuth();
  const {auth} = useAuth()
  useEffect(() => {
    if(auth != undefined && !auth?.keepLogin){
        setAuth({})
    }
  }, []);

  return (
    <div>
      <div>
      <Background/>
      </div>
      <div>
      <h2 style={{background: "#294539", margin:0, padding:0}}>
      </h2>
      {/* <MyCarousel/> */}
      </div>
    <Footer/>
    </div>
  );
}