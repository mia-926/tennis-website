import React, {useState} from 'react';
import westlakePic from '../../images/westlake.png';

export const DateText = (props) => {
    const lessonTime = '10:00am';
    
    // const fetchData = () => {
    //     return fetch("https://randomuser.me/api/")
    //           .then((response) => response.json())
    //           .then((data) => console.log(data));}

    return (


        <div className='inter contain'>
           <h2>{props.weekDay}, {props.month} {props.day}</h2>
           <hr
            style={{
            background: "darkGreen",
            height: "5px",
            border: "none",
            }}
            />
            <div style={{padding:0, margin:0}}>
                <h3>{lessonTime}</h3>
            </div>
            <hr
            style={{
            background: "darkGreen",
            height: "5px",
            border: "none",
            }}
            />

             <img src={westlakePic}></img>

            <h3 style={{textAlign: 'center', fontSize: '1.7em'}}>Location: Westlake High School</h3>
            <h5 style={{textAlign: 'center', fontSize: '1.2em'}}>100 Lakeview Canyon Rd, Thousand Oaks, CA 91362</h5>

        </div>
    );
}

