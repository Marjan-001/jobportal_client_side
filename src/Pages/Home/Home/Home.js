import React from 'react';
import AboutUs from '../../AboutUS/AboutUs';
import Banner from '../Banner/Banner';
import Fresher from '../Freshers/Fresher';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Fresher></Fresher>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
