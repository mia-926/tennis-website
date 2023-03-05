import React, {useState} from 'react';
import { People } from './People';
import './fonts.css';
import './right.css';
import Accordion from 'react-bootstrap/Accordion';





export const Participants = (props) => {
  const taken = props.students.length;
  const total = props.max;
  console.log(props.students)
    return (<div style={{maxHeight: 400}}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='inter'> {taken} out of {total} slots taken</Accordion.Header>
                <Accordion.Body style={{ maxHeight: 150, overflow: "auto" }}>
                    <People names = {props.students}/>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
    </div>);

 
}