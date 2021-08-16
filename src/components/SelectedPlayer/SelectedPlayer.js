import React from 'react';
import './SelectedPlayer.css';

const SelectedPlayer = (props) => {
    const selected = props.selected;
    return (
        <section>
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div>
                            <p className="Total_Selected_Player"> Total selected player: {selected.length}</p>
                            <div className="container">
                                <div className="row">
                                    
                                    <div className="col-md-12 text-center">
                                        {
                                            selected.map(player => <div>
                                                <p className="Selected_Players_Name">{player.name} : <span>${player.salary}</span> </p>
                                            </div>)
                                        }
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

export default SelectedPlayer;