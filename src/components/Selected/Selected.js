import React, { useState } from 'react';
import './selected.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Selected = (props) => {
    const selected = props.selected;
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const lol = selected.map(player => player)
    setSelectedPlayer(lol)
    // details
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div>
                            <p> Total selected player: {selected.length}</p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                    <p>
                                
                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Selected;