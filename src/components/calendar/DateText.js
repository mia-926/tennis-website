import React, {useState} from 'react';
import{MyCarousel} from "./MyCarousel";
import westlakePic from '../../images/westlake.png';
import { MyMap } from './MyMap';


export const DateText = (props) => {
    const lessonTime = props.time;
    const nextLesson = "Friday, February 2";

if(props.isLesson){

    return (
        <div>
         

        <div className='inter myContain'>
           <h2>{props.weekDay}, {props.month} {props.day}</h2>
           <hr
         style={{
         background: '#294539',
         height: "5px",
         border: "none",
         marginLeft: 1,
         marginRight: 0,
         width: 300
         }}
         />
  
            <div style={{padding:0, margin:0}}>
                <h3>{lessonTime}</h3>
            </div>
            <hr
         style={{
         background: '#294539',
         height: "5px",
         border: "none",
         marginLeft: 1,
         marginRight: 0,
         width: 300
         }}
         />

            <MyMap coordinates={props.coordinates}/>

            <h3 style={{textAlign: 'center', fontSize: '1.7em'}}>Location: {props.location}</h3>
            <h5 style={{textAlign: 'center', fontSize: '1.2em'}}>{props.address}</h5>

        </div></div>
    );
}
else{
    return(<div>
                <div className='inter myContain'>
           <h2>{props.weekDay}, {props.month} {props.day}</h2>
           <hr
         style={{
         background: '#294539',
         height: "5px",
         border: "none",
         marginLeft: 1,
         marginRight: 0,
         width: 300
         }}
         />
  
            <div style={{padding:0, margin:0}}>
                <h3>{"No Lesson"}</h3>
            </div>
            <hr
         style={{
         background: '#294539',
         height: "5px",
         border: "none",
         marginLeft: 1,
         marginRight: 0,
         width: 300
         }}
         />

        <div style={{padding:0, margin:0, textAlign:'center'}}>
                <h3>Next Available <br></br> Lesson:</h3>
            </div>

            <div style={{padding:0, margin:0, textAlign:'center'}}>
                <h3>{nextLesson}</h3>
            </div>

        </div>
    </div>);
}
}
