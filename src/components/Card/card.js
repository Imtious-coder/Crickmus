import './card.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const card = (props) => {
    const { name, image, salary } = props.card;
    return (
        <section>
            <div className="container" id="card">
                <div className="row mb-5">
                    <div className="col-6 col-md-4 mt-5 d-flex justify-content-center">
                        <img className="Player_Images ml-2" src={image} alt="" />
                    </div>
                    <div className="col-6 col-md-8 mt-5">
                        <p className="Player_Name">Name: {name}</p>
                        <p className="Player_Salary">Salary: ${salary}</p>
                        <button className="Select_Button" onClick={() => props.handleAddCrickter(props.crickter)}>Select</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default card;