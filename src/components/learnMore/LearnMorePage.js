import React, { useState, useEffect } from 'react';
import { Footer } from '../Footer.js';
import {About} from './About.js';
import { CircleImage } from './CircleImages.js';
import {PhoneAbout} from './PhoneAbout.js';
import { PhoneFAQ } from './PhoneFAQ.js';
import {FAQ} from './FAQ.js';

import logo from '../../images/greenlogo.png';
import abi from '../../images/bannerAbi.png';

export const LearnMorePage = () => {

    const size = () => {
        if(window.innerWidth < 700){
            return true;
        }
        return false;
    }
    const [iphoneSize, setIphoneSize] = useState(() => size())
    if(iphoneSize){
        return(
            <div style={{height: 600, background: "transparent"}}>
                <div> 
                    <div className="white-rectangle"></div><div style={{height:100,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
                </div>:
                <div style={{position:"absolute",top:100, width: "100%"}}>
                    <h2 className='railwayBold' style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',    backgroundImage: `url(${abi})`,backgroundSize: 'cover',height: 125, textAlign: "center", backgroundColor: "black", fontSize: "300%", color: "white"}}> ABOUT US</h2>
                    <div>
                        <PhoneAbout/>
                        <PhoneFAQ/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <CircleImage/>
            <About/>
            <FAQ/>
            <Footer/>
            </div>
        );
    }
}
