import React, { useState, useEffect } from 'react';
import { PhoneFooter } from './PhoneFooter';

export const IphoneBanner = () => {

    return (<div><div style={{display:"flex", flexDirection:"column"}}>
        <Banner2/>
    </div>
    </div>
    );
};




export const Banner2 = (props) => {
    const bannerHeight = 600;
    const bannerWidth = window.innerWidth;
    const triangleHeight = 60;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <div>
        <div style={{position:'absolute', top:1100, marginLeft:0}}>
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight} width={bannerWidth}>
            <path d={path} fill="#233831" stroke="#233831" strokeWidth="2" />
            <BannerOverlay2 />
        </svg>
        </div>
        <div style={{color:'white', display:'flex', flexDirection: "row", justifyContent:"space-around"}}> 
        <div className="railwayBold" style={{position:'absolute', top:1200}}>
            <h3  style={{fontSize:'60%', textAlign:"center"}}>
            WHS GIRLS TENNIS
                </h3>
            <p style={{paddingTop:0, textAlign:"center",fontSize:'150%'}}>
            RANKED #1 <br></br>
            IN THE NATION
                </p>
                <p style={{paddingTop:30, textAlign:"center",fontSize:'150%'}}>CIF-SS STATE <br></br>CHAMPIONS</p>
        
                <p style={{paddingTop:30, textAlign:"center",fontSize:'150%'}}>
                    MARMONTE <br></br>
                    LEAGUE<br></br>
                    CHAMPIONS
                </p>
                <h3  style={{fontSize:'80%', paddingTop:0, textAlign:"center"}}>
            2022
                </h3>
                </div>
            </div>
        </div>
    );
};


const BannerOverlay2 = () => {
    const bannerHeight = 600;
    const bannerWidth = window.innerWidth-100;
    const triangleHeight = 30;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight-15} L0,${bannerHeight} Z`;

    return (
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight-18} width={bannerWidth} x={50}>
            <path d={path} fill="#294539" stroke="#294539" strokeWidth="2" />
        </svg>
    );
};

