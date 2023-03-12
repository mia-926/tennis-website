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
      color= "white"
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
      component = <Home/>
      color= "black"
      break
    case "/admin-page":
      component = <AdminCalendarPage/>
      color="white"
      break

    case "/account":
      component = <Account/>
      color= "black"
      break
    default:
      component = <NewHome/>
      color = "white"
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