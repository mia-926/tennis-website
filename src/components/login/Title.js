import React, { useState, useEffect } from 'react';


export const Title = () => {
    const size = () => {
        if(window.innerWidth < 700){
            return true;
        }
        return false;
    }
    const [iphoneSize, setIphoneSize] = useState(() => size())
    if(iphoneSize){
        return(
            <h2 className = "railwayBold" style = {{marginLeft: 100,alignContent: 'center', fontSize: 50}}>
                Login
            </h2>
        ); 
    }
    return(
        <h2 className = "railwayBold" style = {{alignContent: 'center', fontSize: 50}}>
            Login
        </h2>
    );
}
