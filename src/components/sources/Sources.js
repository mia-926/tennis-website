import React, { useEffect, useState } from 'react';
import "./sources.css";
import {Citations} from "./Citations"
import {Licensing} from "./Licensing"
import logo from '../../images/greenlogo.png';

export const Sources = () => {

    const size = () => {
        if(window.innerWidth < 700){
            return true;
        }
        return false;
    }
    const [iphoneSize, setIphoneSize] = useState(() => size())


    if(iphoneSize){
        return (
            <div style={{height: 600, background: "transparent"}}>
                    <div> 
                        <div className="white-rectangle"></div><div style={{height:100,display:"flex", flexDirection:"row", justifyContent:"center", alignContent:"center"}}><img style={{paddingTop:'20px',position:"absolute" , width:'15%'}}src = {logo}></img></div>
                    </div>:
                <div style={{position:"absolute",top:100, width: "100%"}}>
                    <h2 className='railwayBold' style = {{marginLeft: "20%",   fontSize: "300%", color: "#294539"}}> SOURCES</h2>
                        <div style={{ paddingBottom: 20 }}>
                            <Citations/>
                        </div>
                        <div style = {{paddingTop: 20}}>
                            <Licensing/>
                        </div>
                </div>
            </div>
          );
          
    }
    else{
        return (
            <div className='SourcesColumns' style = {{paddingTop: 100}}>
                <div className='SourcesLeft'>
                    <Citations/>
                </div>
                <div className='SourcesRight'>
                    <Licensing/>
                </div>
            </div>
        )
    }
}