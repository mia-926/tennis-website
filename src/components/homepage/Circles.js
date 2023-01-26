import React, { useState, useEffect } from 'react';


export const Circles = () => {
    const [windowHeight, setwindowHeight] = useState(window.innerHeight)
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)


    const handleResize = () => {
        setwindowHeight(window.innerHeight)
        setwindowWidth(window.innerWidth)
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <svg style = {{position: 'absolute'}} height = {windowHeight} width = {windowWidth}>
            <circle cx={windowWidth*.35} cy={windowHeight*.2} r={windowHeight*.5} fill ="white"/>
            <circle cx={windowWidth*.4} cy={windowHeight*.8} r={windowHeight*.6} fill ="white"/>
        </svg>
    );
}
