import React from 'react';
import { MyNavBar } from './components/navBar/MyNavBar';
import { Background } from './components/homepage/Background';
import { Circles } from './components/homepage/Circles';
import { Text } from './components/homepage/Text';


function App() {
  return (
    <div className = "App">
      <Background/>
      <Circles/>
      <MyNavBar/>
      <Text/>
    </div>
  );
}

export default App;
