'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = async (data) => {
        const { email, name, photo, password } = data;
        console.log('data: ', data)

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: '/',
        })

        console.log('From DB: ', res, error)
        if (error) {
            alert(error.message)
        }

        if (res) {
            alert('Signup Successfully')
        }
    }
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div className='w-10/12 mx-auto mt-28'>
            <div className='w-1/2 mx-auto bg-base-100 shadow-sm rounded-xl p-16'>
                <h1 className='text-center text-4xl font-semibold text-[#403F3F] border-b-2 border-gray-400 pb-12'>Register your account</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset my-6 space-y-4">
                        <div className='space-y-2'>
                            <label className="label font-semibold text-xl">Your Name</label>
                            <input {...register("name", { required: 'name is required' })} type="text" className="input w-full bg-[#F3F3F3] p-5 border-none" placeholder="Enter Your Name" />
                            {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
                        </div>
                        <div className='space-y-2'>
                            <label className="label font-semibold text-xl">Photo URL</label>
                            <input {...register("photo")} type="text" className="input w-full bg-[#F3F3F3] p-5 border-none" placeholder="Enter Your Photo URL" />
                        </div>
                        <div className='space-y-2'>
                            <label className="label font-semibold text-xl">Email Address</label>
                            <input {...register("email", { required: 'email is required' })} type="email" className="input w-full bg-[#F3F3F3] p-5 border-none" placeholder="Enter Your Email Address" />
                            {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
                        </div>
                        <div className='space-y-2 relative'>
                            <label className="label font-semibold text-xl">Password</label>
                            <input {...register("password", { required: 'password is required' })} type={isShowPassword ? "text" : "password"} className="input w-full bg-[#F3F3F3] p-5 border-none" placeholder="Enter Your Password" />
                            <span onClick={()=> setIsShowPassword(!isShowPassword)} className='absolute right-4 top-11'>{isShowPassword ? <FaRegEyeSlash className='text-2xl' /> : <IoEyeOutline className='text-2xl' />}</span>
                            {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
                        </div>
                        <label className="label">
                            <input type="checkbox" className="checkbox" />
                            Accept <strong>Term & Conditions</strong>
                        </label>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p className='text-center'>Already Registered? <Link href={'/login'} className='text-blue-600'>Login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;