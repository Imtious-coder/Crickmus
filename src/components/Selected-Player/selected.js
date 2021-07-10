import React from 'react';
import './selected.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'

const selected = (props) => {
    const selected=props.selected;
    console.log(selected);
    // details
    return (
        <div className="Selected-Area">
            {/* fontawesome icon added here */}
            <h1 className="Title">Total Selected <FontAwesomeIcon icon={faCheckCircle} /></h1><br/>
            <h3>Players: {selected.length}</h3>
            <h4>Name: {selected.name}</h4>
            <small>Salary: ${selected.salary}</small>

        </div>
    );
};

export default selected;