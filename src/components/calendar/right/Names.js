import React, {useState} from 'react';
import './fonts.css';



export const Names = (props) => {
   
    const names =props.names;
    console.log(props.names)

    if(names.length>0){
    return (
      names.map((person, index) => {
          console.log(person);
          return (
              <div key ={index}>
                  <p>{person}</p>
              </div>

              )
      }) )}
      else{
        return(<h2>No Instructors</h2>)
      }

 
}

 //return props.names.map((name) => <li className='inter'>{name}</li>);
    // const listItems = numbers.map((number) =>
    //   <li>{number}</li>
    // );

    // return (<div>{listItems}</div>)