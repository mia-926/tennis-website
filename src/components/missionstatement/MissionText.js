import React, { useState, useEffect } from 'react';
import { GreenCircles } from './GreenCircles';
import './missionfonts.css';
import './missiontext.css';

export const MissionText = () => {

    return(
        <div>
            <GreenCircles/>
            <div className = 'statement justify-content-evenly' style = {{paddingTop: 235}}>
                <h2 className = 'statementfonts'> Our Mission</h2>
                <div style={{ display: "flex", flexDirection: "column"}}>
                <h3 className = 'textfonts'> Reflect on your essay and review the language on the 6 point AP</h3>
                <h3 className = 'textfonts'>scores we looked at in class. Your reflection should be at least 6-8 s </h3>
                </div>
               
            </div>
        </div>
    );
}
