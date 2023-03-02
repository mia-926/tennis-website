import React, {useState} from 'react';
import { People } from './People';
import './fonts.css';
import './right.css';
import Accordion from 'react-bootstrap/Accordion';


const taken = 4;
const total = 20;


export const Participants = () => {
    return (<div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='inter'> {taken} out of {total} slots taken</Accordion.Header>
                <Accordion.Body>
                    <People/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
    </div>);

 
}