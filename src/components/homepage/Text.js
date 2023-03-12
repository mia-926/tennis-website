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
            <h1 className = 'statementfonts' style = {{flex: 2, fontSize: 50}}>OUR MISSION</h1>
            <div style={{flexDirection: 'row', paddingTop: 40, paddingLeft:60, paddingRight:60}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}
