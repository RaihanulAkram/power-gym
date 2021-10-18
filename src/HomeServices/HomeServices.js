import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    const serviceSlice = services.slice(0, 6);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="mt-5 mb-5">
                <h2 className="text-center my-5 text-primary">Our Services</h2>
                <div className="container">
                    <Row xs={1} md={3} className
                        ="row g-4">
                        {
                            serviceSlice.map(service => <HomeService
                                key={service.id}
                                service={service}
                            ></HomeService>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;