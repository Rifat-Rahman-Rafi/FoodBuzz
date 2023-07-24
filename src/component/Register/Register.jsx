import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';


const Register = () => {
    const { createUser, updateInfo,logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
   
   
        //                 sendEmailVerification(user)
        //                   .then(() => {
        //                     console.log("Verification email sent");
        //                     alert('Please verify your email address');
        //                   })
        //                   .catch((error) => {
        //                     console.log(error);
        //                     setError(error.message);
        //                   });
        //               };
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please enter at least one uppercase');
            setSuccess('')
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please enter at least one special character');
            setSuccess('')
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please enter at least one number');
            setSuccess('')
            return;
        } else if (!/.{6}/.test(password)) {
            setError('Please enter minimum 6 character');
            setSuccess('')
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggeduser = result.user;

            
               
                updateInfo(name, photo);
                setSuccess('Register successfully!!!');
                setError('')
                form.reset();
                logOut();
                navigate('/login', { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                setSuccess('')
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center px-10">
                    <h1 className="text-4xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                                 <Link to="/login" className="label-text-alt link link-hover">Already have an account? Please SignIn.</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                       
                        <label className="label">
                            <p className="label-text-alt text-red-600">{error}</p>
                            <p className="label-text-alt text-green-600">{success}</p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;