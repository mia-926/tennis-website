import React, { useState, useEffect } from 'react';
import {Footer} from '../../components/Footer';
export const Banner = () => {

    const firstResize = () => {
        if(window.innerHeight < 676){
            return(-130);
        }else
            if(window.innerHeight < 750){
                return(-90);
        }
        else if(window.innerHeight < 800){
            return(-50)
        }
        else if(window.innerHeight <900){
            return(30);
        } else if(window.innerHeight <950){
            return(50);}
        else{
            return(190)
        }
       
    }
    
    const[position, setPosition] = useState(()=>firstResize());


    useEffect(() =>{
        const handleResize = () => {
            setPosition(firstResize())
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (<div>
        <Banner1 position = {position}/>
        <Banner2 position = {position}/>
        <Banner3 position = {position}/>
    </div>);
};




export const Banner1 = (props) => {


    const bannerHeight = 500;
    const bannerWidth = 300;
    const triangleHeight = 60;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <div>
        <div style={{position:'absolute', top:window.innerHeight+690 + props.position, marginLeft:window.innerWidth*1/3-300, paddingBottom:600}}>
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight} width={bannerWidth}>
            <path d={path} fill="#233831" stroke="#233831" strokeWidth="2" />
            <BannerOverlay1 />
        </svg>
        
        </div>
        <div className="railwayBold" style={{ position:'absolute', top:window.innerHeight+800 + props.position, color:'white'}}>
        <h3  style={{fontSize:'80%', marginLeft:window.innerWidth*1/3-210}}>
        WHS GIRLS TENNIS
            </h3>
            
        <p style={{paddingTop:30, textAlign:"center",fontSize:'200%', marginLeft:100, marginLeft:window.innerWidth*1/3-250,}}>CIF-SS <br></br>STATE <br></br>CHAMPIONS</p>
     
            <h3  style={{fontSize:'100%', marginLeft:window.innerWidth*1/3-190, paddingTop:20}}>
        2021-2022{window.innerHeight}
            </h3>
            </div>
        </div>
        
    );
};


const BannerOverlay1 = () => {
    const bannerHeight = 500;
    const bannerWidth = 150;
    const triangleHeight = 30;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight-32} width={bannerWidth} x={(300 - bannerWidth) / 2}>
            <path d={path} fill="#294539" stroke="#294539" strokeWidth="2" />
        </svg>
    );
};



export const Banner2 = (props) => {
    const bannerHeight = 600;
    const bannerWidth = 300;
    const triangleHeight = 60;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <div>
        <div style={{position:'absolute', top:window.innerHeight+720+ props.position, marginLeft:window.innerWidth/2-150}}>
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight} width={bannerWidth}>
            <path d={path} fill="#233831" stroke="#233831" strokeWidth="2" />
            <BannerOverlay2 />
        </svg>
        </div>
        <div className="railwayBold" style={{paddingLeft:160, position:'absolute', top:window.innerHeight+800+ props.position, color:'white'}}>
        <h3  style={{fontSize:'80%', marginLeft:window.innerWidth/2-220}}>
        WHS GIRLS TENNIS
            </h3>
        <p style={{paddingTop:30, textAlign:"center",fontSize:'280%', marginLeft:window.innerWidth/2-250,}}>
        RANKED <br></br>#1 <br></br>
        IN THE <br></br>NATION
            </p>
     
            <h3  style={{fontSize:'100%',  marginLeft:window.innerWidth/2-180, paddingTop:20}}>
        2022
            </h3>
            </div>
        </div>
    );
};


const BannerOverlay2 = () => {
    const bannerHeight = 600;
    const bannerWidth = 150;
    const triangleHeight = 30;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight-32} width={bannerWidth} x={(300 - bannerWidth) / 2}>
            <path d={path} fill="#294539" stroke="#294539" strokeWidth="2" />
        </svg>
    );
};



export const Banner3 = (props) => {
    const bannerHeight = 500;
    const bannerWidth = 300;
    const triangleHeight = 60;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;
    
    return (
        <div>
        <div style={{position:'absolute', top:window.innerHeight+690+ props.position, marginLeft:window.innerWidth*2/3}}>
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight} width={bannerWidth}>
            <path d={path} fill="#233831" stroke="#233831" strokeWidth="2" />
            <BannerOverlay />
        </svg>
        </div>
        <div className="railwayBold" style={{paddingLeft:60,position:'absolute', top:window.innerHeight+800+ props.position, color:'white'}}>
        <h3  style={{fontSize:'80%', marginLeft:window.innerWidth*2/3+35}}>
        WHS GIRLS TENNIS
            </h3>
        <p style={{paddingTop:30, textAlign:"center",fontSize:'200%', marginLeft:window.innerWidth*2/3}}>
        MARMONTE <br></br>
        LEAGUE<br></br>
        CHAMPIONS
            </p>
     
            <h3  style={{fontSize:'100%', marginLeft:window.innerWidth*2/3+55, paddingTop:20}}>
        2021-2022
            </h3>
            </div>
        </div>
    );
};


const BannerOverlay3 = () => {
    const bannerHeight = 500;
    const bannerWidth = 150;
    const triangleHeight = 30;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight-32} width={bannerWidth} x={(300 - bannerWidth) / 2}>
            <path d={path} fill="#294539" stroke="#294539" strokeWidth="2" />
        </svg>
    );
};


const BannerOverlay = () => {
    const bannerHeight = 500;
    const bannerWidth = 150;
    const triangleHeight = 30;
    const path = `M0,0 L${bannerWidth},0 L${bannerWidth},${bannerHeight} L${bannerWidth / 2},${bannerHeight - triangleHeight} L0,${bannerHeight} Z`;

    return (
        <svg viewBox={`0 0 ${bannerWidth} ${bannerHeight}`} height={bannerHeight-32} width={bannerWidth} x={(300 - bannerWidth) / 2}>
            <path d={path} fill="#294539" stroke="#294539" strokeWidth="2" />
        </svg>
    );
};

