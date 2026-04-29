'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userLogo from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user);
    return (
        <div className='w-10/12 mx-auto flex items-center mt-5'>
            <div className='mx-auto'>
                <ul className='flex gap-4 text-gray-500'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/aboutUs'}>About</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                </ul>
            </div>
            {isPending ? <span className="loading loading-dots loading-xl"></span>
                : user ? <div className='flex gap-2 items-center'>
                    <h2>Hello, {user.name}</h2>
                    <Image src={user.image || userLogo} alt='user logo' width={40} height={40}></Image>
                    <button className='btn bg-gray-700 text-white' onClick={async () => await authClient.signOut()}>Logout</button>
                </div> :
                    <button className='btn bg-gray-700 text-white'><Link href={'/login'}>Login</Link></button>}
        </div>
    );
};

export default Navbar;