import React, { useState, useEffect } from 'react';
import lesson from '../../images/EthanLesson.png';
import serve from '../../images/ethanServe.png';

export const CircleImage = () => {

    return(
        <div style={{padding:0}}>
                      
            <div>
            <img style={{ top:-200, left:window.innerWidth-490, position:"absolute", borderRadius:'50%', height:550, width:550}}src = {serve}></img>
            </div>

            <div>
            <img style={{top: 200, left:window.innerWidth-350,position: "absolute", borderRadius:'50%', height:450, width:450}}src = {lesson}></img>
            </div>

        </div>
    );
}
