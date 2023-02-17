import React from 'react';

const Fresher = () => {
    const fresher = [
        {
            jobTitle: "Frontend Developer"
        },
        {
            jobTitle: "Backend Developer"
        },
        {
            jobTitle: "UI/UX Designer"
        },
        {
            jobTitle: "Data Analyst"
        },
        {
            jobTitle: "Graphic Designer"
        },
        {
            jobTitle: "Video Editor"
        }
    ]



    return (
        <div>
            <h3 className='text-primary lg:text-6xl text-5xl lg:font-extrabold font-bold text-center py-28'>Fresher Jobs</h3>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
                {
                    fresher.map(({ jobTitle }) => {

                        return (

                            <div className="card  bg-orange-200 text-black font-extrabold   ">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl lg:text-4xl md:text-2xl">{jobTitle}</h2>

                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary mt-6">Apply</button>

                                    </div>
                                </div>
                            </div>



                        )
                    })
                }
            </div>
            <div className='flex  justify-center'>
                <button className="btn btn-primary mt-6">See All</button>
            </div>
        </div>
    );
};

export default Fresher;