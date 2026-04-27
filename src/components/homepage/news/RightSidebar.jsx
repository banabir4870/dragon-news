import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h1 className="text-xl font-semibold text-gray-500">Login With</h1>
            <div className='flex flex-col mt-4 space-y-2'>
                <button className='flex items-center gap-2 justify-center btn btn-outline text-blue-400'><FaGoogle />Login With Google</button>
                <button className='flex items-center gap-2 justify-center btn btn-outline'><FaGithub />Login With GitHub</button>
            </div>
        </div>
    );
};

export default RightSidebar;