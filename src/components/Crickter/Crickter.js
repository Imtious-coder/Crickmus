import React, { useState } from 'react';
import CrickterData from '../../data/cricketers info.json'
import './Crickter.css';
import Card from '../Card/card'
import Selected from '../Selected-Player/selected'

const Crickter = () => {
    const information = data;
    const [cricketers, setCricketers] = useState(information);
    const [selected, setSelected] = useState([]);

    // event handler here..
    const handleAddCrickter = (crickter) => {
        const newSelected = [...selected, crickter];
        setSelected(newSelected);
    }

    return (
        // Left side(crickter cards here)..
        <div className="Total-Container">
            <div className="crickter-container">
                {
                    cricketers.map(cricketer => <Card
                        handleAddCrickter={handleAddCrickter}
                        card={cricketer}></Card>)
                }
            </div>
            {/* Right side(Selected area here)... */}
            <div className="selected-container">
                <Selected selected={selected}></Selected>
            </div>
        </div>
    );
};

export default Cri