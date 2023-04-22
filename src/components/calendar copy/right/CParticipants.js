import React, {useState} from 'react';
import { CPeople } from './CPeople';
import './fonts.css';
import './right.css';
import Accordion from 'react-bootstrap/Accordion';





export const CParticipants = (props) => {
  const taken = props.students.length;
  const total = props.max;
    return (<div style={{maxHeight: 400, borderWidth: 10, borderColor: "black"}}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='inter'> {taken} out of {total} slots taken</Accordion.Header>
                <Accordion.Body style={{ maxHeight: 150, overflow: "auto" }}>
                    <CPeople names = {props.students}/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
    </div>);

 
}