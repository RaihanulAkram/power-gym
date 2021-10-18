import React from 'react';
import "./Mission.css"
const Mission = () => {
    return (
        <div className="">
            <section className="mission mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-4 mb-5 text-center">
                            <h2 className="text-primary">PowerGym's Goal</h2>
                            <div className="mx-auto mb-5"></div>
                            <div className="d-md-flex flex-sm-wrap text-center px-5">
                                <div className="col-md-4 col-sm-12 text-center">
                                    <h6 className="text-primary">Our Vision</h6>
                                    <p className="">Our vission is to make people healthy by leading a healthy lifestyle.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 text-center">
                                    <h6 className="text-primary">Our Mission</h6>
                                    <p className="">Our Mission is to make people fit and strong with the help of power training.</p>
                                </div>
                                <div className="col-md-4 col-sm-12 text-center mx-auto">
                                    <h6 className="text-primary">Our Core Value</h6>
                                    <p>Core values are a set of basic practices that inform how you conduct your life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;