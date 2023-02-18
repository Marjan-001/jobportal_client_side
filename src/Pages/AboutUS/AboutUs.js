import React from 'react';
import about from '../../assets/about.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero mt-36  " id='about'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={about} className="lg:max-w-lg max-w-xs rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl text-primary font-bold">About US</h1>
                        <p className="pt-6 text-secondary font-extrabold">What we are doing</p>
                        <p className="pt-3 text-black font-semibold">We provides top tech jobs.Helps applicants find jobs and aids employers
                            in their quest to locate ideal candidates.Here we can choose your desire job and also post a job for your company.</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;