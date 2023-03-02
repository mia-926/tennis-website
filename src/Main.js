import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom'
import Home from '../components/home/Home';
import MyCalendar from '../components/calendar/MyCalendar';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/calendar' component={MyCalendar}></Route>
    </Switch>
  );
}

export default Main;