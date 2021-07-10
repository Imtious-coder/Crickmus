import React, { useEffect, useState } from 'react';
import CrickterData from '../../data/cricketers info.json'
import './Crickter.css';
import Card from '../Card/card'
import Selected from '../Selected-Player/selected'

const Crickter = () => {
    const [cricketers, setCricketers] = useState([]);
    const [selected, setSelected] = useState([]);

    // event handler here..
    const handleAddCrickter = (crickter) => {
        const newSelected = [...selected, crickter];
        setSelected(newSelected);
    }
    useEffect(() => {
        setCricketers(CrickterData)
    }, [])

    return (
        <section id="Main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="Left_Side">
                            {
                                cricketers.map(cricketer => <Card
                                    handleAddCrickter={handleAddCrickter}
                                    card={cricketer}></Card>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="selected-container">
                            <Selected selected={selected}></Selected>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Crickter;
