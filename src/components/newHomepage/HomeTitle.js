import React, { useState, useEffect } from 'react';



export const HomeTitle = () => {


    return(
        <div className="titleContainer" style={{top: window.innerHeight/2.4, width: window.innerWidth, position:"absolute", color: "white"}}>
            <h2 className="railway homeTitle">WESTLAKE TENNIS<br></br> INITIATIVE</h2>
            <div style={{margin:30}}>
                <p className="unna homeSubtitle">INSPIRING THE NEXT GENERATION OF VARSITY TENNIS</p>
            </div>
        </div>
    );
}