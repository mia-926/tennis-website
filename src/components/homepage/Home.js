import React,   { useEffect } from 'react';
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
      <Background/>
      <Circles/>
      <Text/>
    </div>
  );
}