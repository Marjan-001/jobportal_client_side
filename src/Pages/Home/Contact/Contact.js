import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center mx-auto mt-40 border bg-orange-100 p-10'>

            <form >
                <h3 className='mb-5 text-2xl lg:text-5xl text-primary text-center font-bold '>Contact Us</h3>
                <div >
                    <label className='text-orange-500 font-bold text-xl' htmlFor="">Your Name:</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                </div>
                <div className='mt-7'>
                    <label className='text-orange-500 font-bold text-xl' htmlFor="">Your Email:</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                </div>
                <div className='mt-7'>
                    <label className='text-orange-500 font-bold mb-1 text-xl' htmlFor="">Message:</label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                </div>
                <div className='flex  justify-center'>
                    <button className="btn btn-primary mt-6">Send</button>
                </div>
            </form>


        </div>
    );
};

export default Contact;