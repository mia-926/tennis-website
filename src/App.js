import { useEffect, useState } from 'react';

// import { BrowserRouter as Router} from 'react-router-dom';

// import { Switch, Route } from 'react-router-dom';

//import {Home} from './components/homepage/Home';
import { MyNavBar } from './components/navBar/MyNavBar';
import { CalendarReturnPage } from './components/calendar/CalendarReturnPage';
import { SignUp } from './components/signUp/SignUp';
import{Login} from "./components/login/Login";
import{Account} from "./components/account/Account";
import{NewHome} from "./components/newHomepage/NewHome";
import { AdminCalendarPage } from './components/calendar/AdminCalendarPage';
import {MissionStatement} from './components/MissionStatement/MissionStatement';
import {LearnMorePage} from './components/learnMore/LearnMorePage';
import {Instructors} from './components/instructors/Instructors';
import {Sources} from "./components/sources/Sources"
import { InstructorPage } from './components/instructors/InstructorPage';
import useScroll from "./components/hooks/useScroll"
import { IphoneHome } from './components/newHomepage/iphone/IphoneHome';
import { HomePage } from './components/newHomepage/HomePage';
import { CCalendarPage } from './components/calendar copy/CCalendarPage';
import { Info } from './components/instructorSignUp/Info';
import { Positions } from './components/instructorSignUp/Positions';
import { JuniorApplication } from './components/instructorSignUp/JuniorApplication';
import { SeniorApplication } from './components/instructorSignUp/SeniorApplication';
import { AdvertismentApplication } from './components/instructorSignUp/AdvertismentApplication';
import { ViewApplication } from './components/calendar/admin/ViewApplicaitons';
import { FilledApplication } from './components/calendar/admin/FilledApplication';

function App() {
  let component
  let color = "white";
  let rightColor="white";
  let background="transparent";
  let rightbackground = "transparent";

  let {scroll} = useScroll()
    switch (window.location.pathname) {
      case "/%257Btennis-website%257D":
        component = <HomePage/>
        color = "white";
        rightColor="white";
        background=String(scroll);
        rightbackground=String(scroll); 
        break
      case "/home":
        component = <HomePage/>
        color = "white"
        rightColor="white";
        background=String(scroll);
        rightbackground=String(scroll);  
        break 
      case "/instructor-junior-application":
          component = <JuniorApplication/>
          color = "black"
          rightColor="black";
          background=String(scroll);
          rightbackground=String(scroll);  
          break 
      case "/instructor-senior-application":
        component = <SeniorApplication/>
        color = "black"
        rightColor="black";
        background=String(scroll);
        rightbackground=String(scroll);  
        break 
      case "/instructor-advertisement-application":
        component = <AdvertismentApplication/>
        color = "black"
        rightColor="black";
        background=String(scroll);
        rightbackground=String(scroll);  
        break 
      case "/instructor-signup":
          component = <Info/>
          color = "white"
          rightColor="white";
          background=String(scroll);
          rightbackground=String(scroll);  
          break 
      case "/instructor-positions":
        component = <Positions/>
        color = "black"
        rightColor="white";
        background=String(scroll);
        rightbackground=String(scroll);  
        break 
      case "/join-lesson":
        component = <CalendarReturnPage/>
        color= "white"
        rightColor="black";
        background="transparent";
        rightbackground="transparent"
        break
      case "/view-applications":
        component = <ViewApplication/>
        color= "black"
        rightColor="black";
        background="transparent";
        rightbackground="white"
        break
      case "/filled-application":
        component = <FilledApplication/>
        color= "black"
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
        rightColor="black";
        background="white";
        rightbackground="white"
        break
      case "/instructors":
        component = <InstructorPage/>
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
        component = <HomePage/>
        color = "white"
        rightColor="white";
        background=String(scroll);
        rightbackground=String(scroll); 
        break 
    }
  useEffect(() => {
    switch (window.location.pathname) {
      case "/%257Btennis-website%257D":
        component =  <HomePage/>
        color = "white";
        rightColor="white";
        background="transparent"
        rightbackground="transparent"
        break
      case "/home":
        component = <HomePage/>
        color = "white"
        rightColor="white";
        background=String(scroll);
        rightbackground=String(scroll);  
        break 
      case "/join-lesson":
        component = <CalendarReturnPage/>
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
        component = <InstructorPage/>
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
        component =  <HomePage/>
        color = "white"
        rightColor="white";
        background="transparent";
        rightbackground="transparent"
        break 
    }
    }, [scroll]);

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