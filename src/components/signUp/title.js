import React, { useState, useEffect } from 'react';
import "./homepage.css";
import "./textStyle.css";


export const Text = () => {
    return(
        <div className = "firstDiv" style = {{top: windowHeight, width: windowWidth}}>
            <h2  style = {{flex: 2, fontSize: 24}}>Free Group Tennis Lessons In Westlake Village</h2>
            <div style={{flexDirection: 'row', paddingTop: 40}}>
                <a style = {{marginRight: 10, width: 120, paddingTop: 8, paddingBottom: 8}}class="greenb btn btn-primary" href="join" role="button">Join a Lesson</a>
                <a style = {{marginLeft: 10, width: 120, paddingTop: 20, paddingBottom: 20}} class="whiteb btn btn-outline-primary" href="learn" role="button">Learn More</a>
            </div>
        </div>
    );
}
