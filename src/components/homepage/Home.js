import React from 'react';
import { MyNavBar } from '../navBar/MyNavBar';
import { Background } from './Background';
import { Circles } from './Circles';
import { Text } from './Text';

export const Home = () => {
  return (
    <div>
      <Background/>
      <Circles/>
      <Text/>
    </div>
  );
}