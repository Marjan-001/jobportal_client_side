import React from 'react';
import AboutUs from '../../AboutUS/AboutUs';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Fresher from '../Freshers/Fresher';
import TopCompany from '../TopCompany/TopCompany';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Fresher></Fresher>
            <Experience></Experience>
            <TopCompany></TopCompany>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;
