import React, {useState} from 'react';
import './fonts.css';



export const Names = (props) => {
    //return props.names.map((name) => <li className='inter'>{name}</li>);
    const numbers =[props.names];
    //console.log(props.names)
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );

    return (<div>{listItems}</div>)
 
}