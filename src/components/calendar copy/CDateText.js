import React, {useState} from 'react';
import{MyCarousel} from "./CMyCarousel";




export const CDateText = (props) => {
    const lessonTime = props.time;
    let nextLesson = props.nextDay;


    if(nextLesson ==="No upcoming Lessons"){

        if(props.day === 16 && props.month === "March"){
            nextLesson = "Friday, March 17";
        }
    }



if(props.isLesson){

    return (
        <div>
         

        <div className='railwayMediumDigits myContainPhone' style={{height:300, color:"white"}}>
       
           <h2 className='railwayBold' style={{justifySelf:"start",fontSize:"45px", letterSpacing:"3px"}}>{props.weekDay.toUpperCase()}</h2>
           <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start"}}>
           <h2 className='railwayBold' style={{fontSize:"45px"}}>{props.month.toUpperCase().substring(0,3)} {props.day} </h2>
  
            <div style={{paddingLeft:40, paddingTop:15, margin:0}}>
                <h3>{lessonTime}</h3>
            </div>
            </div>


            <h3 style={{fontSize: '1em', paddingTop:20}}>Location: <div style={{display:"inline-flex", flexWrap:"wrap", color:"#0664F0"}}>{props.location}</div></h3>
           

        </div></div>
    );
}
else{
    return(<div>
                <div className='railwayMediumDigits myContainPhone' style={{height:300, color:"white"}}>
       
       <h2 className='railwayBold' style={{justifySelf:"start",fontSize:"40px", letterSpacing:"3px"}}>{props.weekDay.toUpperCase()}</h2>
       <div style={{display:"flex", flexDirection:"row", alignItems:"flex-start", paddingBottom:40}}>
       <h2 className='railwayBold' style={{fontSize:"40px"}}>{props.month.toUpperCase().substring(0,3)} {props.day} </h2>

        <div style={{paddingLeft:30, paddingTop:15, margin:0}}>
            <h3>no lesson</h3>
        </div>
        </div>


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
