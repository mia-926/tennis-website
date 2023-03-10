import React, { useState, useEffect } from 'react';
import "./missiontext.css";
import "./missionfonts.css";


export const MText = () => {

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
        <div className = "statement" style = {{position: 'absolute', top: window.innerHeight / 3, width: window.innerWidth, color: "black"}}>
            <h2 className = 'mtextfont' style = {{flex: 2, fontSize: 70}}>OUR MISSION</h2>
            <div  style={{flexDirection: 'row', paddingTop: 40, paddingBottom:50}}>
            <p className = 'statetext' >We provide free, quality group tennis lessons taught by <br></br>Westlake High School’s varsity tennis in Westlake Village, CA.</p>
                   
            </div>
        </div>
    );
}
