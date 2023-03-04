import React from 'react';

// import { BrowserRouter as Router} from 'react-router-dom';

// import { Switch, Route } from 'react-router-dom';

import {Home} from './components/homepage/Home';
//import { MyCalendar } from './components/calendar/MyCalendar';
// import { CalendarPage } from './components/calendar/CalendarPage';
// import { Background } from './components/homepage/Background';
// import { Circles } from './components/homepage/Circles';
// import { Text } from './components/homepage/Text';
import { MyNavBar } from './components/navBar/MyNavBar';
import { CalendarPage } from './components/calendar/CalendarPage';
import { SignUp } from './components/signUp/SignUp';
import { MissionText } from './components/missionstatement/MissionText';

function App() {
  let component

  switch (window.location.pathname) {
    case "/%257Btennis-website%257D":
      component = <Home/>
      break
    case "/home":
      component = <Home/>
      break 
    case "/join-lesson":
      component = <CalendarPage/>
      break
    case "/create-account":
      component = <SignUp/>
      break
    case "/mission":
      component = <MissionText/>
      break

  }

  return (
    <div className = "App">
      {/*<Background/>*/}
      {/*<Circles/>*/}
      <MyNavBar/>
      {/*<Text/>*/}
      
      {component}
    </div>
  );


  


  // return (
  //    <div className = "App">
  //     <MyNavBar/>
  //     <Home/>
  //   </div>
  // );
}

export default App;