import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './pic.png';
const BootStrap = () => {
    return (
        <>
            <h1 className="text-center my-5 text-capitalize text-secondary">Welcome to Code Tech</h1>
            <div className="container">
                <div className="row">

                    <div className="col-sm">
                        <div className="card">
                            <img src={pic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img src={pic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card" >
                            <img src={pic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-outline-secondary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BootStrap;