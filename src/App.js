import React from 'react';
import { MyNavBar } from './components/navBar/MyNavBar';
import { Background } from './components/homepage/Background';
import { Circles } from './components/homepage/Circles';
import { Text } from './components/homepage/Text';
import { GreenCircles } from './components/missionstatement/GreenCircles';
import { MissionText } from './components/missionstatement/MissionText';


function App() {
  return (
    <div className = "App">
      {/*<Background/>*/}
      {/*<Circles/>*/}
      <MyNavBar/>
      {/*<Text/>*/}
      <GreenCircles/>
    </div>
  );
}

export default App;
