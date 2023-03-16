import React, {useState} from 'react';
import{MyCarousel} from "./MyCarousel";
import westlakePic from '../../images/westlake.png';
import { MyMap } from './MyMap';



export const DateText = (props) => {
    const lessonTime = props.time;
    let nextLesson = props.nextDay;


    if(nextLesson ==="No upcoming Lessons"){

        if(props.day === 15 && props.month === "March"){
            nextLesson = "Friday, March 17";
        }
    }



if(props.isLesson){

    return (
        <div>
         

        <div className='railwayMediumDigits myContain' style={{height:500}}>
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
                <div className='railway myContain' style={{height:500}}>
           <h2 >{props.weekDay}, {props.month} {props.day}</h2>
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
                <h3 className='railway' style={{fontWeight:200}}>{"No Lesson"}</h3>
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
                <h3 style={{fontWeight:400}}>Next Available <br></br> Lesson:</h3>
            </div>

            <div style={{padding:0, margin:0, textAlign:'center'}}>
                <h3>{nextLesson}</h3>
            </div>

        </div>
    </div>);
}
}
