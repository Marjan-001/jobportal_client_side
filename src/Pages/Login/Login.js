import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const handleSubmit = event => {
        event.prevent.Default();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error())

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5 text-center text-primary">Login</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className="card-body">


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary text-white" type="submit" value="Login" />
                                </div>



                            </form>
                            <hr />
                            <small>Create an account <Link className='text-primary' to='/signup'>Sign Up</Link></small>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;