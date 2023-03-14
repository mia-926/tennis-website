import React, { useEffect, useState } from 'react';
import "./sources.css";
import {Citations} from "./Citations"
import {Licensing} from "./Licensing"

export const Sources = () => {
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