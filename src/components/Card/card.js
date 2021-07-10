import './card.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
    const { name, image, salary } = props.card;
    return (
        <section>
            <div className="container" id="card">
                <div className="row mb-5">
                    <div className="col-6 col-md-4 mt-5 d-flex justify-content-center">
                        <img className="Player_Images ml-2" src={image} alt="" />
                    </div>
                    <div className="col-6 col-md-8 mt-5 Player_Info_Card">
                        <p className="Player_Name">Name: {name}</p>
                        <p className="Player_Salary">Salary: ${salary}</p>
                        <button className="Select_Button" onClick={() => props.handleAddCrickter(props.card)}>Select</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;