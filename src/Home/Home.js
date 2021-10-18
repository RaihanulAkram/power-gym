import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Mission from '../Mission/Mission';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Mission></Mission>
            {/* contact  */}
            <section className="">
                <div className="container border border-primary border-5 rounded-3 mb-5 p-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="p-3 text-primary">Contact With Us</h2>
                            <p className="">Press the button below to Contact with us. And feel free to comment and share your views to improve our services.</p>
                            <Link to="/contact" className="btn btn-primary mb-5 ">Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;