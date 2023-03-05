import React from 'react';
import { MyCarousel } from '../calendar/MyCarousel';
import { Footer } from '../Footer';
import { MyNavBar } from '../navBar/MyNavBar';
import { Background } from './Background';
import { Circles } from './Circles';
import { Text } from './Text';

export const Home = () => {
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