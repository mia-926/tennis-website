import React, { useState, useEffect } from 'react';
import "./homepage.css";
import "./textStyle.css";


export const Text = () => {

    const startWidth = () => {
        if (window.innerWidth > 990){
            return(window.innerWidth *.6)
        }
        else{
            return(window.innerWidth)
        }
    }

    const startHeight = () => {
        if (window.innerWidth > 990){
            return(window.innerHeight *.35)
        }
        else{
            return(window.innerHeight *.5)
        }
    }

    const [windowWidth, setwindowWidth] = useState(()=>startWidth())
    const [windowHeight, setwindowHeight] = useState(()=>startHeight())


    const handleResize = () => {
        if (window.innerWidth > 990){
            setwindowWidth(window.innerWidth *.6)
        }
        else{
            setwindowWidth(window.innerWidth)
        }
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div className = "firstDiv" style = {{top: windowHeight, width: windowWidth}}>
            <h2  style = {{flex: 2, fontSize: 24}}>Free Group Tennis Lessons In Westlake Village</h2>
            <div style={{flexDirection: 'row', paddingTop: 40}}>
                <a style = {{marginRight: 10, width: 120, paddingTop: 8, paddingBottom: 8}}className="greenb btn btn-primary" href="join" role="button">Join a Lesson</a>
                <a style = {{marginLeft: 10, width: 120, paddingTop: 20, paddingBottom: 20}} className="whiteb btn btn-outline-primary" href="learn" role="button">Learn More</a>
            </div>
        </div>
    );
}
