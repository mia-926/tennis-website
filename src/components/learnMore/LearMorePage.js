import React, { useState, useEffect } from 'react';
import {About} from './About.js';
import FAQ from './FAQ.js';

export const LearnMorePage = () => {

    return(
        <div>
           <About/>
           <FAQ/>
        </div>
    );
}
