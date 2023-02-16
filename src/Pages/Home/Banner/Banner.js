import React, { useState } from 'react';
import Typed from 'react-typed';

const Banner = () => {
    const [text, setText] = useState("Job seeker")

    const changeText = () => {

        let newText = text;
        newText === "Job seeker" ? setText("Job poster") : setText("Job seeker")


    }

    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url("https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="mb-5 text-5xl font-bold text-white">
                        <Typed

                            strings={[
                                "Looking For A Job",
                                "Find Your Dream Job"
                            ]}

                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        />
                    </div>

                    <p className="mb-5 text-xl lg:text-3xl text-white">We provide top companies job details and easy apply process.</p>
                    <button onClick={changeText} className="mt-5 btn btn-primary animate-bounce lg:text-xl text-white font-semibold">{text}</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;