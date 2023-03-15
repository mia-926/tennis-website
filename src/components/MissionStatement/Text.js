import React, { useState, useEffect } from 'react';
import "./missionStatement.css";
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
    const startPadding= () =>{
        if (window.innerWidth > 990){
            return(-150)
        }
        else{
            return(0)
        }
    }

    const [windowWidth, setwindowWidth] = useState(()=>startWidth())
    const [windowHeight, setwindowHeight] = useState(()=>startHeight())
    const [padding, setPadding] = useState(()=>startPadding())


    const handleResize = () => {
        if (window.innerWidth > 990){
            setwindowWidth(window.innerWidth *.6)
            setPadding(-150);
        }
        else{
            setwindowWidth(window.innerWidth)
            setPadding(100)
        }
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div className = "firstDiv" style = {{top: windowHeight+padding, width: windowWidth}}>
            <h1 className = 'railwayBold' style = {{flex: 2, fontSize: 60}}>OUR MISSION</h1>
            <hr
         style={{
         background: 'black',
         height: "5px",
         border: "none",
         marginLeft: 1,
         marginRight: 0,
         width: 400
         }}
         />
            <div style={{flexDirection: 'row', paddingTop: 20, paddingLeft:60, paddingRight:60}}>
                <p className = "railway">Playing for our varsity tennis team for 3 years, we understand that high school tennis is a very expensive investment. It is no secret that winning against high-level players and maintaining a starter position on the high school varsity team requires consistent private lessons as well as attending numerous clinics. With private lessons averaging $60 an hour and clinics being as expensive, many athletes are pressured to perform exceptionally. This pressure in addition to the time commitment in being part of the tennis team heavily discourages players when they do not meet expectations. As a consequence, we have witnessed many team members, both JV and Varsity, quit the tennis team during our tennis seasons. 
<br></br><br></br><span style={{fontWeight:900}}f>Our misson </span> 
at Westlake Tennis Academy is to provide aspiring tennis players with an environment where hard work and dedication are recognized and rewarded. We hope that through the essential insight we provide in our free clinics every Friday, our members will develop the skills and confidence they need to achieve their goals. Our goal is to make tennis accessible to all and to help every participant reach their full potential on and off the court. Through our commitment to excellence, we aim to inspire and empower the next generation of tennis champions.
</p>
            </div>
        </div>
    );
}
