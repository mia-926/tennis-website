import React, {useState} from 'react';
import './fonts.css';



export const Names = (props) => {
   
    const names =props.names;
    console.log(props.names + "Name")

    if(names.length>0){
    return (
      names.map((person, index) => {
          console.log(person);
          return (
              <div key ={index}>
                  <p className='railwaysemibold' style={{fontSize:'1.2em', padding:0, margin:3}}>{person}</p>
              </div>

              )
      }) )}
      else{
        return(<h2 className = "railway">No Instructors</h2>)
      }

 
}

 //return props.names.map((name) => <li className='inter'>{name}</li>);
    // const listItems = numbers.map((number) =>
    //   <li>{number}</li>
    // );

    // return (<div>{listItems}</div>)