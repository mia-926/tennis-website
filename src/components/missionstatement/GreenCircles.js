import React, { useState, useEffect } from 'react';


export const GreenCircles = (props) =>
{
    const circleStyle = 
    {
        backgroundColor: 'green',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        position: 'fixed',
        right: '0',
        top: '50%',
        transform : 'translateY(-50%)'
    };

    return ( <div style={circleStyle}></div>);
}
