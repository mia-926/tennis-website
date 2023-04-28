import React, { useState, useEffect } from 'react';
import "./titleStyle.css"

export const Title = () => {
    return(
        <h2 className = "signUpTitle railwayBold" style = {{ alignContent: 'center', fontSize: 50}}>
            Sign Up
        </h2>
    );
}
