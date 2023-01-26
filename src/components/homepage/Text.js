import React, { useState, useEffect } from 'react';
import "./homepage.css";

export const Text = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)


    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    useEffect(() =>{
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return(
        <div style = {{display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', position: 'absolute', top: window.innerHeight*.35, backgroundColor: 'white', width: windowWidth*.6}}>
            <h2  style = {{flex: 2}}>Free Group Tennis Lessons In Westlake Village</h2>
            <div style={{flexDirection: 'row', paddingTop: 40}}>
                <a style = {{marginRight: 10, width: 120, paddingTop: 8, paddingBottom: 8}}class="greenb btn btn-primary" href="join" role="button">Join a Lesson</a>
                <a style = {{marginLeft: 10, width: 120, paddingTop: 20, paddingBottom: 20}} class="whiteb btn btn-outline-primary" href="learn" role="button">Learn More</a>
            </div>
        </div>
    );
}
