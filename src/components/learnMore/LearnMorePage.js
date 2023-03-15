import React, { useState, useEffect } from 'react';
import { Footer } from '../Footer.js';
import {About} from './About.js';
import { CircleImage } from './CircleImages.js';
import FAQ from './FAQ.js';

export const LearnMorePage = () => {

    return(
        <div>
            <CircleImage/>
           <About/>
           <FAQ/>
           <Footer/>
        </div>
    );
}
