import React, {useState, useEffect} from 'react';
import './fonts.css';


export const CPeople = (props) => {
    const [people, setPeople] = useState(props.names);
    
    console.log("final prop names"+props.names )
    useEffect(() => {
      setPeople(props.names);
      console.log("final" + people)
    }, [props.names]);
    

    if (people.length > 0) {
        return people.map((person, index) => {
          return (
            <div key={index}>
              <p>{person}</p>
            </div>
          );
        });
    } else {
        return <h3>No People</h3>;
    }
};

