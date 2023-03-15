import React  from 'react';

// import { BrowserRouter as Router} from 'react-router-dom';

// import { Switch, Route } from 'react-router-dom';

//import {Home} from './components/homepage/Home';
import { MyNavBar } from './components/navBar/MyNavBar';
import { CalendarPage } from './components/calendar/CalendarPage';
import { SignUp } from './components/signUp/SignUp';
import{Login} from "./components/login/Login";
import{Account} from "./components/account/Account";
import{NewHome} from "./components/newHomepage/NewHome";
import { AdminCalendarPage } from './components/calendar/AdminCalendarPage';
import {MissionStatement} from './components/MissionStatement/MissionStatement';
import {LearnMorePage} from './components/learnMore/LearnMorePage';
import {Instructors} from './components/instructors/Instructors';
import {Sources} from "./components/sources/Sources"


function App() {
  let component
  let color = "white";
  let rightColor="white";
  let background="transparent";
  let rightbackground = "transparent"

  switch (window.location.pathname) {
    case "/%257Btennis-website%257D":
      component = <NewHome/>
      color = "white";
      rightColor="white";
      background="transparent"
      rightbackground="transparent"
      break
    case "/home":
      component = <NewHome/>
      color = "white"
      rightColor="white";
      background="transparent";
      rightbackground="transparent"
      break 
    case "/join-lesson":
      component = <CalendarPage/>
      color= "white"
      rightColor="black";
      background="transparent";
      rightbackground="transparent"
      break
    case "/create-account":
      component = <SignUp/>
      color= "black"
      rightColor="white";
      background="transparent";
      rightbackground="transparent"
      break

    case "/login":
      component = <Login/>
      color= "black"
      rightColor="white";
      background="transparent";
      rightbackground="transparent"
      break
    case "/mission":
      component = <MissionStatement/>
      color= "black"
      rightColor="white";
      background="white";
      rightbackground="transparent";
      break
    case "/admin-page":
      component = <AdminCalendarPage/>
      color="white"
      rightColor="black";
      background="transparent";
      rightbackground="transparent"
      break
    case "/learn-more":
      component = <LearnMorePage/>
      color="black"
      rightColor="black";
      background="white";
      rightbackground="white"
      break
    case "/account":
      component = <Account/>
      color= "black"
      rightColor="white";
      background="white";
      rightbackground="transparent"
      break
    case "/instructors":
      component = <Instructors/>
      color = "black"
      rightColor="black";
      background="white";
      rightbackground="white"
      break
    case "/sources":
      component = <Sources/>
      color = "black"
      rightColor="black";
      background="white";
      rightbackground="white"

      break
    default:
      component = <NewHome/>
      color = "white"
      rightColor="white";
      background="transparent";
      rightbackground="transparent"
      break 
    
    


  }
  console.log("app "+ rightbackground)
  return (
    <div className = "App">
      {/*<Background/>*/}
      {/*<Circles/>*/}
      <MyNavBar background = {background} rightbackground = {rightbackground} rightColor = {rightColor} color = {color}/>
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