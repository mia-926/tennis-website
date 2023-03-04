import React, {useState} from 'react';
import './fonts.css';
const people = [
    "Tyler",
    "Ganhee",
    "Seb",
    "Nester"
]

function ListItem(props)
 {
    const value = props.value;
    return(<li>{value}</li>
    );
 }




    export const People = (props) => {
    //return props.names.map((name) => <li className='inter'>{name}</li>);
    const people =props.names;
    
    

    if(people.length > 0){
        return (
            people.map((person, index) => {
                console.log(person);
                return (
                    <div key ={person}>
                        <p>{person}</p>
                    </div>

                    )
            })
        )}else{
            return (<h3>No People</h3>)
        }
 
}

