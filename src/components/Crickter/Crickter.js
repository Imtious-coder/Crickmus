import React, { useEffect, useState } from 'react';
import CrickterData from '../../data/cricketers info.json'
import './Crickter.css';
import Card from '../Card/Card'
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const Crickter = () => {
    const [cricketers, setCricketers] = useState([]);
    const [selected, setSelected] = useState([]);


    useEffect(() => {
        setCricketers(CrickterData)
    }, [])

    // event handler here..
    const handleAddCrickter = (crickter) => {
        const newSelected = [...selected, crickter];
        setSelected(newSelected);
    }

    return (
        <section id="Main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="Left_Side">
                            {
                                cricketers.map(cricketer => <Card handleAddCrickter={handleAddCrickter} card={cricketer}></Card>)
                            }
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            <SelectedPlayer selected={selected}></SelectedPlayer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Crickter;
