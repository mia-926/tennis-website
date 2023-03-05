import React  from 'react';

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
import{Login} from "./components/login/Login";
import{NewHome} from "./components/newHomepage/NewHome"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

/*function App() {
  return (
    <Router>
      <div className="App">
        <MyNavBar />
        <Routes>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/join-lesson" component={CalendarPage} />
          <Route exact path="/create-account" component={SignUp} />
          <Route exact path="/login" component={Login} />
        </Routes>
      </div>
    </Router>
  );
}*/


function App() {
  let component
  let color = "white";
  switch (window.location.pathname) {
    case "/%257Btennis-website%257D":
      component = <NewHome/>
      color = "white";
      break
    case "/home":
      component = <NewHome/>
      color = "white"
      break 
    case "/join-lesson":
      component = <CalendarPage/>
      color= "black"
      break
    case "/create-account":
      component = <SignUp/>
      color= "black"
      break

    case "/login":
      component = <Login/>
      color= "black"
      break
    case "/mission":
      component = <MissionText/>
      color= "black"
      break

  }

  return (
    <div className = "App">
      {/*<Background/>*/}
      {/*<Circles/>*/}
      <MyNavBar color = {color}/>
      {/*<Text/>*/}
      
      {component}
    </div>
  );


}

export default App;




/*
function App() {


  return (
    <Routes>
      <Route path="/" element= {<layout />}>
        <Route path = "home" element = {<Home/>} />
        <Route path = "%257Btennis-website%257D" element = {<Home/>} />
        <Route path = "create-account" element = {<SignUp/>} />
        <Route path = "login" element = {<Login/>} />
        <Route path = "home" element = {<Home/>} />

        <Route path = "join-lesson" element = {<CalendarPage/>} />

        <Route path = "*" elemnt = {<Home/>} />
      </Route>
    </Routes>
  );
*/

  // return (
  //    <div className = "App">
  //     <MyNavBar/>
  //     <Home/>
  //   </div>
  // );