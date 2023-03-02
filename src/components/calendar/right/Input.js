import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import './right.css';
import './fonts.css';

export const Input = () => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
        <div className='inter contain'>
        <label  className='contain'>
            Participant Name
            <div>
                <input type="text" value={inputValue} onChange={handleChange} />
            </div>
        </label>
       <p></p>
        {/* <p>You typed: {inputValue}</p> */}
        <Button className= "button" variant="success">Register</Button>{' '}
        </div>
    </div>
  );
}
