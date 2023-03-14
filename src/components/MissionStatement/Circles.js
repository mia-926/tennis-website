import React, { useState, useEffect } from 'react';


export const Circles = (props) => {
    const widePositions = [100, 0,  .85, .65, 100, 1, 1.05, .8];
    const positions = [0, .35, .2, .5, 0, .4, .8, .6];

    const startPosition = () => {
        if(window.innerWidth > 990){
            return([0, .35, .2, .5, 0, .4, .8, .6]);
        }
        else{
            return([100, 0,  .85, .65, 100, 1, 1.05, .8]);
        }
    }

    const [windowHeight, setwindowHeight] = useState(window.innerHeight)
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    // const [position, setPosition] = useState(()=>startPosition())
    const [position, setPosition] = useState(() => startPosition())

    const handleResize = () => {
        setwindowHeight(window.innerHeight)
        setwindowWidth(window.innerWidth)

        if(window.innerWidth > 990){
            setPosition([0, .35, .2, .5, 0, .4, .8, .6]);
        }
        else{
            setPosition([100, 0,  .85, .65, 100, 1, 1.05, .8]);
        }
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
        return(
        <svg style = {{position: 'absolute'}} height = {window.innerHeight} width = {window.innerWidth}>
            <circle cx={position[0]+ windowWidth*position[1]} cy={windowHeight*position[2]} r={windowHeight*position[3]} fill ="white"/>
            <circle cx={(windowWidth*position[5])-position[4]} cy={windowHeight*position[6]} r={windowHeight*position[7]} fill ="white"/>
        </svg>
            // <svg style = {{position: 'absolute'}} height = {window.innerHeight} width = {window.innerWidth}>
            //     <circle cx={windowWidth*.35} cy={windowHeight*.2} r={windowHeight*.5} fill ="white"/>
            //     <circle cx={windowWidth*.4} cy={windowHeight*.8} r={windowHeight*.6} fill ="white"/>
            // </svg>
        );

}
