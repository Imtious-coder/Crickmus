import React, { useState } from 'react';
import './card.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const card = (props) => {
    const { name, image, salary } = props.card;
    return (
        <div id="card">
            {/* player images */}
            <div id="image">
                <img src={image} alt="" />
            </div>
            {/* player info */}
            <div className="name">
                <h3>{name}</h3>
                <small>Salary is:- ${salary}</small>
                <br /> <br />
                <button className="btn btn-success" onClick={() => props.handleAddCrickter(props.crickter)}>Select</button>

            </div>

        </div>
    );
};

export default card;