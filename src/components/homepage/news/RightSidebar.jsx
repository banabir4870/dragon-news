'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log('data', data)
    }
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        });
        console.log('git data: ', data);
    }
    return (
        <div>
            <h1 className="text-xl font-semibold text-gray-500">Login With</h1>
            <div className='flex flex-col mt-4 space-y-2'>
                <button className='flex items-center gap-2 justify-center btn btn-outline text-blue-400' onClick={handleGoogleSignin}><FaGoogle />Login With Google</button>
                <button className='flex items-center gap-2 justify-center btn btn-outline' onClick={handleGithubSignin}><FaGithub />Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSidebar;