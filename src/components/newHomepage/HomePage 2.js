import React, { useState, useEffect } from 'react';
import { IphoneHome } from './iphone/IphoneHome';
import { NewHome } from './NewHome';



export const HomePage = () => {

    if(window.innerWidth < 700){
    return(
        <div >
            <IphoneHome/>
        </div>
    );}
    else{
        return(
            <div>
                <NewHome/>
            </div>
        )
    }
}