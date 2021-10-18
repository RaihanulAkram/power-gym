import React from 'react';
import AboutImg from "../images/Banner2.jpg"
import "./About.css"

const About = () => {
    return (
        <div className="container mx-auto">
            <img className="img-fluid mt-2 rounded-3" src={AboutImg} alt="" style={{ width: '1400px', height: '500px' }} />
            <div className="text-center custom bg-primary">
                <h1>About PowerGym</h1>
                <p>Welcome to PowerGym, the world's largest professional network with 774+ million members in more than 200 countries and territories worldwide.</p>
            </div>

            <div className="text-center custom bg-primary">
                <h2>Our Vision</h2>
                <p>Our vission is to make people healthy by leading a healthy lifestyle.</p>
            </div>

            <div className="text-center custom bg-primary">
                <h2>Our Mission</h2>
                <p>Our Mission is to make people fit and strong with the help of power training.
                </p>
            </div>

            <div className="text-center custom bg-primary">
                <h2>Our Core Value</h2>
                <p>Core values are a set of basic practices that inform how you conduct your life.
                </p>
            </div>

            <div className="text-center custom bg-primary">
                <h2>Who are we?</h2>
                <p>PowerGym began was officially launched on May 5, 2003 in New York.</p>
                <p>Today, PowerGym leads a diversified business with revenues from membership subscriptions, advertising sales and recruitment solutions under the leadership of Ryan Roslansky.</p>
            </div>
        </div>
    );
};

export default About; <h2>This is about</h2>