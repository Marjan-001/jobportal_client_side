import React, { useEffect, useState } from 'react';

const TopCompany = () => {

    const [companies, setCompanies] = useState([])

    useEffect(() => {


        fetch('http://localhost:5000/topcom')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])
    return (
        <div>
            <h3 className='text-primary lg:text-6xl text-5xl lg:font-extrabold font-bold text-center py-28'>Top Companies of BD and Around the World</h3>

            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8'>
                {
                    companies.map(({ name }) => {

                        return (

                            <div className="card  bg-orange-200 text-black font-extrabold   ">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl lg:text-4xl md:text-2xl">{name}</h2>

                                    <div className="card-actions justify-center">
                                        <button className="btn btn-primary mt-6">View Details</button>

                                    </div>
                                </div>
                            </div>



                        )
                    })
                }
            </div>

        </div>
    );
};

export default TopCompany;