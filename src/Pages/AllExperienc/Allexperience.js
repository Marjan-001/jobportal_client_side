import React, { useEffect, useState } from 'react';

const Allexperience = () => {

    const [jobs, setJob] = useState([]);
    useEffect(() => {


        fetch('http://localhost:5000/experience-jobs')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Category</th>
                        <th>Job Positon</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Logo</th>
                        <th>Apply</th>

                    </tr>
                </thead>
                {
                    jobs.map((j, i) =>
                        <>
                            < tbody >
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{j.jobTittle}</td>
                                    <td>{j.position}</td>
                                    <td>{j.company}</td>

                                    <td>{j.location}</td>
                                    <td>
                                        <img className='avatar w-16 rounded-full' src={j.logo} alt="" />
                                    </td>

                                    <td><button className='btn btn-primary'>Apply</button></td>
                                </tr>

                            </tbody>
                        </>)
                }

            </table>
        </div >
    );
};

export default Allexperience;