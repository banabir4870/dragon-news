'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center mt-5'>
            <div className='mx-auto'>
                <ul className='flex gap-4 text-gray-500'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/aboutUs'}>About</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <Image src={user} alt='user logo' width={40} height={40}></Image>
                <button className='btn bg-gray-700 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;