import React from 'react';
import { MyNavBar } from './components/navBar/MyNavBar';
import { Background } from './components/homepage/Background';



function App() {
  return (
    <div className = "App">
      <Background/>
      <MyNavBar/>
    </div>
  );
}

export default App;
