import React, {useState} from 'react';
import './fonts.css';



export const CNames = (props) => {
   
    const names =props.names;
    console.log(props.names + "Name")

    if(names.length>0){
    return (
      names.map((person, index) => {
          console.log(person);
          return (
              <div style={{display:"inline-flex", flexWrap:"wrap", marginRight:"10px"}} key ={index}>
                  <p className='railwaysemibold' style={{fontSize:'90%', padding:0, margin:3}}>{person}</p>
              </div>

              )
      }) )}
      else{
        return(<h2 className = "railway">No Instructors</h2>)
      }

 
}
